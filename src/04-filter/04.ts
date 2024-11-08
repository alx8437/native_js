const ages = [2, 10, 50, 39, 45, 90, 95]

const courses = [
    {title: 'HTML', price: 120},
    {title: 'CSS', price: 140},
    {title: 'Javascript', price: 300},
]

type CourseType = {
    title: string
    price: number
}

const cheapPredicate = (course: CourseType) => {
    return course.price < 150
}

const cheapCourses: Array<CourseType> = []

