// export default interface User{
//     username:string;
//     password:string;
//     firstname:string;
//     lastname:string;
//     email:string;
//     phonenumber:string;
// }
export interface User {
    id: number;
    username: string;
    password: string; // Consider using a more secure way to handle passwords
    firstName: string;
    lastName: string;
    email: string;
    phone: string | null;
    enabled: boolean;
    profile: string;
    authorities: Array<any>; // You can define a more specific type if needed
    accountNonExpired: boolean;
    accountNonLocked: boolean;
    credentialsNonExpired: boolean;
}
