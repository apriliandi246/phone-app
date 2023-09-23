export type ContactType =
	| {
			id: number;
			first_name: string;
			last_name: string;
			created_at: string;
			phones: [{ number: string }];
	  }[]
	| [];

export type ContactData = {
	id: number;
	first_name: string;
	last_name: string;
	created_at: string;
	phones: [{ number: string }];
};
