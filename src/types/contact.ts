export type ContactListType =
	| {
			id: number;
			first_name: string;
			last_name: string;
			created_at: string;
			phones: [{ number: string }];
	  }[]
	| [];

export type ContactDataType = {
	id: number;
	first_name: string;
	last_name: string;
	created_at: string;
	phones: [{ number: string }];
};
