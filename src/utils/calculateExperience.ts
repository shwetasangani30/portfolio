// Calculate years of experience
const calculateExperience = () => {
    const startDate = new Date('2017-10-01')
    const currentDate = new Date()

    const diffTime = Math.abs(currentDate.getTime() - startDate.getTime())
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365))
    const diffMonths = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30))

    return { years: diffYears, months: diffMonths }
}

export default calculateExperience
