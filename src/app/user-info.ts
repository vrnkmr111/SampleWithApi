export class UserInfo {
   public Id: number;
   public FirstName: string;
   public LastName: string;
   public EmailId: string;
   public Password: string;
   public Address: Address
}

export class Address {
     Id: number;
     Address1: string;
     Address2: string;
     City: string;
     State: string;
     Country: string;
}
