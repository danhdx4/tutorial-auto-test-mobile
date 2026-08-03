# ============================================================================
# Mobile-Auto Environment Setup Script (PowerShell)
# Configure environment variables for Android mobile automation testing
# ============================================================================

$setupComplete = $true
$missingSteps = @()

Write-Host ""
Write-Host "===============================================" -ForegroundColor Cyan
Write-Host "     Mobile-Auto Environment Setup             " -ForegroundColor Cyan
Write-Host "===============================================" -ForegroundColor Cyan
Write-Host ""

# ============================================================================
# STEP 1: CHECK AND SET JAVA_HOME
# ============================================================================

Write-Host "1. JAVA_HOME Setup:" -ForegroundColor Cyan
Write-Host "---" -ForegroundColor Gray

if ($env:JAVA_HOME) {
    Write-Host "[OK] JAVA_HOME is configured: $env:JAVA_HOME" -ForegroundColor Green
} else {
    $detectedJdk = $null

    try {
        $javaCmd = Get-Command java -ErrorAction SilentlyContinue
        if ($javaCmd -and $javaCmd.Source) {
            # Extract JAVA_HOME from java.exe path: <jdk>\bin\java.exe
            $detectedJdk = Split-Path (Split-Path $javaCmd.Source -Parent) -Parent
        }
    } catch {}

    if (-not $detectedJdk) {
        $jdkPatterns = @(
            "$env:ProgramFiles\Eclipse Foundation\jdk-*",
            "$env:ProgramFiles\Java\jdk-*",
            "$env:ProgramFiles\OpenJDK\jdk-*",
            "${env:ProgramFiles(x86)}\Java\jdk-*"
        )

        foreach ($pattern in $jdkPatterns) {
            $found = Get-Item $pattern -ErrorAction SilentlyContinue |
                Sort-Object -Property FullName -Descending |
                Select-Object -First 1
            if ($found) {
                $detectedJdk = $found.FullName
                break
            }
        }
    }

    if ($detectedJdk) {
        $env:JAVA_HOME = $detectedJdk
        Write-Host "[OK] JAVA_HOME detected for current session: $env:JAVA_HOME" -ForegroundColor Yellow
        Write-Host "   To set permanently:" -ForegroundColor Gray
        Write-Host "   [Environment]::SetEnvironmentVariable('JAVA_HOME', '$detectedJdk', 'User')" -ForegroundColor Gray

        try {
            [Environment]::SetEnvironmentVariable("JAVA_HOME", $detectedJdk, "User")
            Write-Host "[OK] JAVA_HOME saved permanently for current user" -ForegroundColor Green
        } catch {
            Write-Host "[WARN] Cannot set permanent JAVA_HOME (permission issue)" -ForegroundColor Yellow
        }
    } else {
        Write-Host "[ERROR] JAVA_HOME is not configured and JDK was not found" -ForegroundColor Red
        $setupComplete = $false
        $missingSteps += "Install Java JDK and add java to PATH"
        Write-Host "   Expected example: C:\Program Files\Java\jdk-21" -ForegroundColor Gray
    }
}

Write-Host ""

# ============================================================================
# STEP 2: CHECK AND SET ANDROID_HOME / ANDROID_SDK_ROOT
# ============================================================================

Write-Host "2. ANDROID_HOME Setup:" -ForegroundColor Cyan
Write-Host "---" -ForegroundColor Gray

if ($env:ANDROID_HOME -and $env:ANDROID_SDK_ROOT) {
    Write-Host "[OK] ANDROID_HOME is configured: $env:ANDROID_HOME" -ForegroundColor Green
    Write-Host "[OK] ANDROID_SDK_ROOT is configured: $env:ANDROID_SDK_ROOT" -ForegroundColor Green
} else {
    $androidCandidates = @(
        "$env:LOCALAPPDATA\Android\Sdk",
        "$env:ProgramData\Android\Sdk",
        "C:\Android\Sdk",
        "$env:SystemDrive\Android\Sdk"
    )

    $detectedAndroid = $null
    foreach ($candidate in $androidCandidates) {
        if (Test-Path $candidate) {
            $detectedAndroid = $candidate
            break
        }
    }

    if ($detectedAndroid) {
        try {
            [Environment]::SetEnvironmentVariable("ANDROID_HOME", $detectedAndroid, "User")
            [Environment]::SetEnvironmentVariable("ANDROID_SDK_ROOT", $detectedAndroid, "User")
            Write-Host "[OK] ANDROID_HOME and ANDROID_SDK_ROOT saved permanently: $detectedAndroid" -ForegroundColor Green
        } catch {
            Write-Host "[WARN] Cannot set permanent Android variables, using current session only" -ForegroundColor Yellow
        }

        $env:ANDROID_HOME = $detectedAndroid
        $env:ANDROID_SDK_ROOT = $detectedAndroid
    } else {
        Write-Host "[ERROR] ANDROID_HOME/ANDROID_SDK_ROOT are not configured and SDK was not found" -ForegroundColor Red
        $setupComplete = $false
        $missingSteps += "Install Android SDK and configure ANDROID_HOME + ANDROID_SDK_ROOT"
    }
}

Write-Host ""

# ============================================================================
# STEP 3: UPDATE PATH FOR CURRENT SESSION
# ============================================================================

Write-Host "3. PATH Configuration:" -ForegroundColor Cyan
Write-Host "---" -ForegroundColor Gray

if ($env:JAVA_HOME -and $env:ANDROID_HOME) {
    $env:Path = "$env:JAVA_HOME\bin;$env:ANDROID_HOME\platform-tools;$env:ANDROID_HOME\tools;$env:ANDROID_HOME\tools\bin;$env:Path"
    Write-Host "[OK] PATH updated for current terminal session" -ForegroundColor Green
} else {
    Write-Host "[ERROR] Cannot update PATH because JAVA_HOME or ANDROID_HOME is missing" -ForegroundColor Red
    $setupComplete = $false
}

Write-Host ""
Write-Host "===============================================" -ForegroundColor Cyan
Write-Host "Device Detection:" -ForegroundColor Cyan
Write-Host "===============================================" -ForegroundColor Cyan
Write-Host ""

# ============================================================================
# STEP 4: DETECT CONNECTED ANDROID DEVICE
# ============================================================================

Write-Host "[INFO] Detecting connected Android devices..." -ForegroundColor Gray

$deviceOutput = adb devices
$deviceList = @()
foreach ($line in $deviceOutput) {
    if ($line -match '^\s*(\S+)\s+device\s*$' -and $line -notmatch '^List of devices') {
        $deviceList += $matches[1]
    }
}

if ($deviceList.Count -eq 0) {
    Write-Host "[ERROR] No connected Android device found" -ForegroundColor Red
    Write-Host "   Connect device via USB and enable USB Debugging" -ForegroundColor Yellow
    $setupComplete = $false
    $missingSteps += "Connect at least one Android device or start an emulator"
} else {
    $udid = $deviceList[0]
    Write-Host "[OK] Found device: $udid" -ForegroundColor Green

    try {
        $deviceName = (adb -s $udid shell "getprop ro.product.model").Trim()
        $manufacturer = (adb -s $udid shell "getprop ro.product.manufacturer").Trim()
        $androidVersion = (adb -s $udid shell "getprop ro.build.version.release").Trim()

        Write-Host "   Manufacturer: $manufacturer" -ForegroundColor Gray
        Write-Host "   Model: $deviceName" -ForegroundColor Gray
        Write-Host "   Android: $androidVersion" -ForegroundColor Gray
        Write-Host "   UDID: $udid" -ForegroundColor Gray
    } catch {
        Write-Host "[WARN] Cannot query detailed device info" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "===============================================" -ForegroundColor Cyan

if ($setupComplete) {
    Write-Host "Setup Complete!" -ForegroundColor Green
} else {
    Write-Host "Setup INCOMPLETE!" -ForegroundColor Red

    if ($missingSteps.Count -gt 0) {
        Write-Host "Missing steps:" -ForegroundColor Yellow
        $missingSteps | Select-Object -Unique | ForEach-Object {
            Write-Host " - $_" -ForegroundColor Yellow
        }
    }
}

Write-Host "===============================================" -ForegroundColor Cyan
Write-Host ""