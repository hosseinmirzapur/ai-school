export interface INotification {
   id: number | string
   text: string
   type: "system" | "teacher"
   seen: boolean
}

export interface ChartItem {
   month: string
   myScore: number
   avgScore: number
   year: number
}

export interface IRanking {
   subject: string
   myGrade: number
   average: number
}

export interface IProfile {
   fullName?: string
   email: string
   classNumber: number | string
   avatar?: string
}

export const notifications: INotification[] = [
   {
      id: 1,
      text: "خوش اومدی! امیدوارم روز قشنگی داشته باشی",
      type: "system",
      seen: true,
   },
   {
      id: 2,
      text: "یادت باشه فردا تکالیف فارسی رو انجام داده باشی!",
      type: "teacher",
      seen: false,
   },
]

export const chartData: ChartItem[] = [
   {
      month: "مهر",
      myScore: 15,
      avgScore: 13,
      year: 1402,
   },
   {
      month: "آبان",
      myScore: 12.5,
      avgScore: 15,
      year: 1402,
   },
   {
      month: "آذر",
      myScore: 20,
      avgScore: 18.5,
      year: 1402,
   },
   {
      month: "دی",
      myScore: 17,
      avgScore: 19.5,
      year: 1402,
   },
   {
      month: "بهمن",
      myScore: 18.75,
      avgScore: 18.25,
      year: 1402,
   },
   {
      month: "اسفند",
      myScore: 20,
      avgScore: 12.75,
      year: 1402,
   },
   {
      month: "فروردین",
      myScore: 15.25,
      avgScore: 13,
      year: 1403,
   },
   {
      month: "اردیبهشت",
      myScore: 13,
      avgScore: 16.75,
      year: 1403,
   },
   {
      month: "خرداد",
      myScore: 12,
      avgScore: 7,
      year: 1403,
   },
   {
      month: "تیر",
      myScore: 11,
      avgScore: 13.5,
      year: 1403,
   },
   {
      month: "مرداد",
      myScore: 16,
      avgScore: 15,
      year: 1403,
   },
   {
      month: "شهریور",
      myScore: 19.5,
      avgScore: 18.75,
      year: 1403,
   },
]

export const rankings: IRanking[] = [
   {
      subject: "زبان انگلیسی",
      average: 15,
      myGrade: 18,
   },
   {
      subject: "علوم",
      average: 17,
      myGrade: 16.5,
   },
   {
      subject: "ریاضی",
      average: 16.38,
      myGrade: 12.25,
   },
   {
      subject: "فارسی",
      average: 18.25,
      myGrade: 16.5,
   },
   {
      subject: "مطالعات اجنماعی",
      average: 14,
      myGrade: 19.5,
   },
]

export const profile: IProfile = {
   classNumber: "دوم",
   email: "annie_leonchart@gmail.com",
   fullName: "Annie Leonchart",
}
