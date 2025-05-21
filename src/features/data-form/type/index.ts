export type DataFormContentType = {
	logo: FileList
	companyOrganizationalForm: string
	companyFirmName: string
	address: string
	companyPhone: string
	companyEmail: string
	INN: string
	OGRN: string

	senderSName: string
	senderFName: string
	senderPatronymic: string
	senderGrade: string

	recipient: string
	recipientPhone: string

	header: string
	body: { content: string }[]

	sendingDate: string
	number: string
	rNumber: string
	receivedDate: string

	attachments: {
		title: string
		content: string
	}[]
}
