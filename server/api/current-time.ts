export default defineEventHandler(async (event) => {
    try {
        // Get the current UTC time from the server
        const now = new Date()
        
        // Return the current date information in UTC
        const utcTime = {
            year: now.getUTCFullYear(),
            month: now.getUTCMonth() + 1, // JavaScript months are 0-indexed, so add 1
            day: now.getUTCDate(),
            timestamp: Date.UTC(
                now.getUTCFullYear(),
                now.getUTCMonth(),
                now.getUTCDate(),
                0, 0, 0, 0 // Set to midnight UTC for consistent daily timestamp
            )
        }
        
        return utcTime
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to get current time'
        })
    }
})
