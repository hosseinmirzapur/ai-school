export interface IMessage {
	text?: string
	role: "user" | "system"
	hasFile: boolean
	hasVoice?: boolean
}

export const messages: IMessage[] = [
	{
		text: "سلام حالت چطوره؟",
		role: "user",
		hasFile: false,
	},
	{
		text: "سلام حالم خوبه تو چطوری؟",
		role: "system",
		hasFile: false,
	},
	{
		text: "من عالیم! این فایل رو برای من بررسی کن و بم بگو توش چی نوشته",
		role: "user",
		hasFile: true,
	},
	{
		text: "این فایل محتوای درسی فارسی درس یک رو داره و توش کلی توضیحات نوشته راجع به شاهنامه و داستان رستم و سهراب و جنگ افسانه ای شون",
		role: "system",
		hasFile: false,
	},
	{
		text: "ممنون کمک خیلی زیادی به من کردی!",
		role: "user",
		hasFile: false,
	},
	{
		text: "خوشحالم که تونستم کمکی به شما بکنم. اگر سوال دیگه ای داشتین حتما از من بپرسین!",
		role: "system",
		hasFile: false,
	},
]
