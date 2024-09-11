export interface ILesson {
   id: number | string
   name: string
   imgSrcs?: string[]
}

export interface ISubjectBook {
   id: number | string
   imageSrc: string
   title: string
   lessons: ILesson[]
}

export const lessons: ILesson[] = [
   {
      id: 1,
      name: "درس یک",
      imgSrcs: ["/assets/lesson-image-1.png", "/assets/lesson-image-2.png"],
   },
]

export const subjectBooks: ISubjectBook[] = [
   {
      id: 1,
      title: "ریاضی",
      imageSrc: "/assets/math.png",
      lessons: [
         {
            id: 1,
            name: "درس یک",
         },
         {
            id: 2,
            name: "درس دو",
         },
         {
            id: 3,
            name: "درس سه",
         },
         {
            id: 4,
            name: "درس چهار",
         },
         {
            id: 5,
            name: "درس پنج",
         },
         {
            id: 6,
            name: "درس شش",
         },
      ],
   },
   {
      id: 2,
      title: "علوم تجربی",
      imageSrc: "/assets/science.png",
      lessons: [
         {
            id: 7,
            name: "درس یک",
         },
         {
            id: 8,
            name: "درس دو",
         },
         {
            id: 9,
            name: "درس سه",
         },
         {
            id: 10,
            name: "درس چهار",
         },
         {
            id: 11,
            name: "درس پنج",
         },
         {
            id: 12,
            name: "درس شش",
         },
      ],
   },
   {
      id: 3,
      title: "فارسی",
      imageSrc: "/assets/literature.png",
      lessons: [
         {
            id: 13,
            name: "درس یک",
         },
         {
            id: 14,
            name: "درس دو",
         },
         {
            id: 15,
            name: "درس سه",
         },
         {
            id: 16,
            name: "درس چهار",
         },
         {
            id: 17,
            name: "درس پنج",
         },
         {
            id: 18,
            name: "درس شش",
         },
      ],
   },
   {
      id: 4,
      title: "مطالعات اجتماعی",
      imageSrc: "/assets/social.png",
      lessons: [
         {
            id: 19,
            name: "درس یک",
         },
         {
            id: 20,
            name: "درس دو",
         },
         {
            id: 21,
            name: "درس سه",
         },
         {
            id: 22,
            name: "درس چهار",
         },
         {
            id: 23,
            name: "درس پنج",
         },
         {
            id: 24,
            name: "درس شش",
         },
      ],
   },
   {
      id: 5,
      title: "زبان انگلیسی",
      imageSrc: "/assets/english.png",
      lessons: [
         {
            id: 25,
            name: "درس یک",
         },
         {
            id: 26,
            name: "درس دو",
         },
         {
            id: 27,
            name: "درس سه",
         },
         {
            id: 28,
            name: "درس چهار",
         },
         {
            id: 29,
            name: "درس پنج",
         },
         {
            id: 30,
            name: "درس شش",
         },
      ],
   },
]
