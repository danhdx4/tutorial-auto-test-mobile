// File này chỉ dùng để test setup app không cần đưa vào bài tập lớn
// Command test: npx wdio final-exam/lanhnt/wdio.conf.ts --spec final-exam/lanhnt/specs/example.spec.ts
// -> Thay tuong ung thu muc cua minh
import { addStep } from "@wdio/allure-reporter";

describe('Sample', () => {
    it('Run app', async () => {
        addStep("Check app start successfully");
        await driver.pause(15000)
    })
})
