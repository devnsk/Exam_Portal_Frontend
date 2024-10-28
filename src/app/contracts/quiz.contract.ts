export interface Quiz {
    qId: number; // Assuming Long maps to number in TypeScript
    title: string;
    description: string; // Length is not enforced in TypeScript
    maxMarks: string; // Consider using number if maxMarks is numeric
    numberOfQuestions: string; // Same as above
    active: boolean;
    category: Category; // Assuming Category is another interface
    // questions: Question[]; // Assuming Question is another interface
}

// Example of Category interface
export interface Category {
    cid: number; // Assuming Long maps to number
    title: string;
}

// Example of Question interface
export interface Question {
    id: number; // Assuming Long maps to number
    text: string;
    // Add other properties as needed
}
