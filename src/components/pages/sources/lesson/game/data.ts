export interface IFlashCard {
   id: number | string
   question: string
   answer: string
   img?: string
}

export const flashCards: IFlashCard[] = [
   {
      question: "نام پایتخت ایران چیست؟",
      answer: "تهران",
      id: 1,
   },
   {
      question: "خورشید از کدام سمت طلوع می‌کند؟",
      answer: "شرق",
      id: 2,
   },
   {
      question: "بزرگترین دریاچه جهان کدام است؟",
      answer: "دریای خزر",
      id: 3,
   },
   {
      question: "چه رنگی حاصل ترکیب زرد و آبی است؟",
      answer: "سبز",
      id: 4,
   },
   {
      question: "سرعت نور چقدر است؟",
      answer: "۳۰۰ هزار کیلومتر بر ثانیه",
      id: 5,
   },
   {
      question: "زبان رسمی ایران چیست؟",
      answer: "فارسی",
      id: 6,
   },
   {
      question: "عدد پی چقدر است؟",
      answer: "۳.۱۴",
      id: 7,
   },
   {
      question: "فصل تابستان چند ماه دارد؟",
      answer: "سه ماه",
      id: 8,
   },
   {
      question: "زمستان بعد از کدام فصل می‌آید؟",
      answer: "پاییز",
      id: 9,
   },
   {
      question: "نام بلندترین کوه ایران چیست؟",
      answer: "دماوند",
      id: 10,
   },
]
