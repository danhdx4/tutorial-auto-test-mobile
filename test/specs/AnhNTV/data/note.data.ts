export interface NoteData {
    title: string;
    content: string;//quy định kiểu dữ liệu
}

export const noteData: NoteData = {//dữ liệu cụ thể khi test
    title: 'Test Note',
    content: 'This is my test note'
};