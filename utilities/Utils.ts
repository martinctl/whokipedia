import type { UserPersistence } from "~/utilities/Firebase"
import type { TimedStat } from "~/model/UserModel"

// --------------------------------- Toast notifications display  --------------------------------- //

/**
 * Displays an error notification.
 * @param description - The description of the error
 * @param toast - for alert notification
 */
export function displayErrorNotification(toast: any, description: string): void {
    toast.remove('any')
    toast.add({
        id: 'any',
        title: 'Something went wrong :(',
        description: description,
        icon: 'i-heroicons-x-circle',
        color: "red"
    })
}

/**
 * Displays a success notification.
 * @param description - The description of the success
 * @param toast - for alert notification
 */
export function displaySuccessNotification(toast: any, description: string): void {
    toast.remove('any')
    toast.add({
        id: 'any',
        title: 'Yeahhh !',
        description: description,
        icon: 'i-heroicons-check-circle',
        color: "green"
    })
}

// --------------------------------- String utilities  --------------------------------- //

/**
 * Given a string, this function returns the same string with the first letter capitalized.
 * @param str - the string to capitalize
 */
export function capitalize(str: string): string {
    const s = str.trim()
    return s.charAt(0).toUpperCase() + s.slice(1)
}

/**
 * Given a name (string) this function returns a string containing the initials of the name
 * @param name - name we want the initials of
 */
export function getInitials(name: string): string {
    const words: string[] = name.split(' ')
    let initials: string = ''
    for (const word of words) {
        if (word.length > 0) {
            initials += word[0].toUpperCase() + ". "
        }
    }
    return initials
}

// --------------------------------- String cleaning utilities --------------------------------- //

/**
 * Remove all text  between the opening and closing tags in the given string.
 * @param text - a string that may contain tags to remove
 * @param opening - the opening tag
 * @param closings - all the possible closing tag
 */
export function removeTag(text: string, opening: string, ...closings: string[]): string {
    const regexStr = `${opening}[^]*?(${closings.join('|')})`
    const regex = new RegExp(regexStr, 'g')
    return text.replace(regex, '')
}

/**
 * Replaces all occurrences of the given name in the given text by "???", including
 * first name and last name, name particles (e.g. von) and name suffixes (e.g. Jr.).
 * @param name - celebrity first name(s) and last name(s)
 * @param text - text from which to remove the name
 */
export function removeNameOccurrences(text: string, name: string): string {
    // Get lists of all first names and names, without name particle (i.e. von, de, of...)
    const names: string[] = [
        ...name.split(" ").map(n => n.trim()), name
    ]
    names.forEach(n => {
        const regex = new RegExp(n + '(?![a-zA-Z])', 'gi')
        text = text.replace(regex, "???")
    })
    return text
}

// --------------------------------- Miscellaneous --------------------------------- //
/**
 * This function is used to sort all users from the database according to their number
 * of guesses and time for today's challenge.
 */
export function sortTodayChallengers(users: UserPersistence[], timeStamp: number): UserPersistence[] {
    const filteredUserData: UserPersistence[] = users.filter((item: UserPersistence) => {
        return item.stats.find((stat: TimedStat) => stat.date === timeStamp)
    })
    return filteredUserData.sort((a: UserPersistence, b: UserPersistence): number => {
        const aStats = a.stats.find((stat: TimedStat) => stat.date === timeStamp)
        const bStats = b.stats.find((stat: TimedStat) => stat.date === timeStamp)
        if (aStats && bStats) {
            if (aStats.guesses === bStats.guesses) return aStats.time - bStats.time
            return aStats.guesses - bStats.guesses
        }
        return 0
    })
}

/**
 * This function outputs a color depending on the number of streak
 * @param streak - the number of followed games played
 */
export function getColor(streak : number) : string {
    if(streak <= 1) return '#FFC11F'
    if(streak <= 3) return '#FF9316'
    if(streak <= 7) return '#FE650D'
    if(streak <= 14) return '#F33C04'
    if(streak <= 30) return '#DA1F05'
    else return '#A10100'

}

/**
 * This function takes a number of seconds as input and outputs a string
 * formatting it in a xx hr xx min xx sec or (if simple = true) xx h xx m xx s way
 * @param seconds - the number of seconds
 * @param simple - by default false, if set to true outputs a simpler format
 * @return string - a string showing the number of hours / minutes / seconds
 */
export function formatTime(seconds : number, simple : boolean = false){
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds
    if(minutes >= 60){
        const hours = Math.floor(minutes / 60)
        const remainingMinutes = minutes % 60
        if(simple) return `${hours} h ${remainingMinutes} m ${formattedSeconds} s`
        return `${hours} hr ${remainingMinutes} min ${formattedSeconds} sec`
    }
    if(simple) return `${minutes} m ${formattedSeconds} s`
    return `${minutes} m ${formattedSeconds} s`
}

/**
 * This method blurs all occurrences of "???" in the given text by HTML-formatting
 * it and adding a blurred <span> tag.
 * @param str - text which contains occurrences to blur
 * @return string - text with blurred HTML tags instead of "???"
 */
export function blurHTML(str: string): string {
    return str.replace(/\?\?\?/g, '<span class="blur-sm">cheater</span>')
}

/**
 * Method to encrypt text.
 * @param text - text to encrypt
 */
export function getEncryptedString(text : string) : string {
    let encrypted : string = ""
    for(let i = 0; i < text.length; ++i) {
        // Checks whether char is letter or number
        if(/^[a-zA-Z]$/.test(text[i]) || /^[0-9]$/.test(text[i])){
            const randomChar: number = Math.floor(Math.random() * (122 - 65 + 1)) + 65
            encrypted = encrypted +  String.fromCharCode(randomChar)
        } else {
            // Keep spaces or new lines
            encrypted = encrypted + text[i]
        }
    }
    return encrypted
}

/**
 * Given a sentence of words separated by "and", returns all
 * possible permutations of the words around these "and".
 * @param input - a sentence of words separated by "and"
 */
export function getAndPermutations(input: string): string[] {
    const words = input.split(" and ").map(word => word.trim())

    function generatePermutations(arr: string[], index: number) {
        if (index === arr.length - 1) {
            return [arr.slice()]
        }

        const result: string[][] = []
        for (let i = index; i < arr.length; i++) {
            [arr[index], arr[i]] = [arr[i], arr[index]]; // Swap
            result.push(...generatePermutations(arr, index + 1));
            [arr[index], arr[i]] = [arr[i], arr[index]]; // Restore
        }
        return result
    }

    const permutations: string[] = []
    const permutedArrays = generatePermutations(words, 0)
    for (const permutedArray of permutedArrays) {
        permutations.push(permutedArray.join(" and "))
    }

    return permutations
}

/**
 * Split the given text into parts containing equal number of sentences.
 * @param text - the text to split
 * @param num - the number of parts to split the text into
 */
export function splitIntoEqualSentenceParts(text: string, num: number): string[] {
    // Split the text into sentences
    const sentences = text.match(/[^.!?]+[.!?]+/g)
    if (!sentences) return [text]

    const totalSentences = sentences.length
    const sentencesPerPart = Math.floor(totalSentences / num) // Number of sentences per part
    const parts: string[] = []

    // Distribute sentences evenly across the three parts
    let start = 0
    for (let i = 0; i < num - 1; i++) {
        const end = start + sentencesPerPart
        parts.push(sentences.slice(start, end).join(''))
        start = end
    }

    // Add the remaining sentences to the last part
    parts.push(sentences.slice(start).join(''))

    return parts
}

/**
 * Get a random number in the given range.
 * @param min - min of the range
 * @param max - max of the range
 * @returns number - random number in the given range
 */
export function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * Get a random name between max and min dependent on a seed representing the current day
 * @param min - the minimum number returned
 * @param max - the maximum number returned
 */
export async function dailyRandom(min: number, max: number): Promise<number> {
    let state: number = await getCurrentDayTimestamp()
    // Use the xorshift32 algorithm for pseudo-random number generation
    state ^= state << 13
    state ^= state >> 17
    state ^= state << 5
    let factor: number = (state >>> 0) / 0xFFFFFFFF // Convert to a float between 0 and 1
    return Math.floor(factor * (max - min + 1)) + min
}

/**
 * Get a random permutation of number between min and max (both inclusive) pseudo-randomly
 * @param min - the min number
 * @param max - the max number
 * @param seed - a non-compulsory seed for the random calculations
 */
export function randomPermutation(min: number, max: number, seed : number = 0): number[] {
    if(seed === 0) seed = Math.random()
    const numbers = Array.from({ length: max - min + 1 }, (_, i) => i + min);
    const permutation: number[] = [];

    const random = (seed: number) => {
        let x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    };

    while (numbers.length > 0) {
        const randomIndex = Math.floor(random(seed) * numbers.length);
        permutation.push(numbers.splice(randomIndex, 1)[0]);
    }

    return permutation;
}

/**
 * Get the current day timestamp.
 * @returns number - current day timestamp
 */
export async function getCurrentDayTimestamp(): Promise<number> {
    try {
        // Try to use timeapi.io to get the current UTC time
        const response = await fetch('https://timeapi.io/api/Time/current/zone?timeZone=UTC')
        const data = await response.json()
        
        // Create a date object from the API response
        const currentDate = new Date(Date.UTC(
            data.year,
            data.month - 1, // JavaScript months are 0-indexed
            data.day,
            0, 0, 0, 0 // Set to midnight UTC
        ))
        return currentDate.getTime()
    } catch (error) {
        console.error('Error fetching current time:', error)
        
        // Fallback to a deterministic algorithm that doesn't depend on local time
        // Get the current date in UTC
        const now = new Date()
        
        // Calculate days since Unix epoch (January 1, 1970)
        // This ensures all users get the same value regardless of their timezone
        const utcDate = new Date(Date.UTC(
            now.getUTCFullYear(),
            now.getUTCMonth(),
            now.getUTCDate(),
            0, 0, 0, 0
        ))
        
        console.warn('Using fallback UTC-based calculation due to API failure')
        return utcDate.getTime()
    }
}

// --------------------------------- Data --------------------------------- //

export const months: {[key: number]: string} = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
}

export const passwordMinimalLength: number = 6

export const countries: {[key: string]: string} = {
    "Afghanistan": "Afghan",
    "Albania": "Albanian",
    "Algeria": "Algerian",
    "Andorra": "Andorran",
    "Angola": "Angolan",
    "Antigua and Barbuda": "Antiguans",
    "Argentina": "Argentine",
    "Armenia": "Armenian",
    "Australia": "Australian",
    "Austria": "Austrian",
    "Azerbaijan": "Azerbaijani",
    "Bahamas": "Bahamian",
    "Bahrain": "Bahraini",
    "Bangladesh": "Bangladeshi",
    "Barbados": "Barbadian",
    "Belarus": "Belarusian",
    "Belgium": "Belgian",
    "Belize": "Belizean",
    "Benin": "Beninese",
    "Bhutan": "Bhutanese",
    "Bolivia": "Bolivian",
    "Bosnia and Herzegovina": "Bosnian",
    "Botswana": "Batswana",
    "Brazil": "Brazilian",
    "Brunei": "Bruneian",
    "Bulgaria": "Bulgarian",
    "Burkina Faso": "Burkinabe",
    "Burundi": "Burundian",
    "Cabo Verde": "Cape Verdean",
    "Cambodia": "Cambodian",
    "Cameroon": "Cameroonian",
    "Canada": "Canadian",
    "Central African Republic": "Central African",
    "Chad": "Chadian",
    "Chile": "Chilean",
    "China": "Chinese",
    "Colombia": "Colombian",
    "Comoros": "Comoran",
    "Congo (Congo-Brazzaville)": "Congolese",
    "Costa Rica": "Costa Rican",
    "Croatia": "Croatian",
    "Cuba": "Cuban",
    "Cyprus": "Cypriot",
    "Czechia": "Czech",
    "Denmark": "Danish",
    "Djibouti": "Djibouti",
    "Dominica": "Dominican",
    "Dominican Republic": "Dominican",
    "Ecuador": "Ecuadorean",
    "England": "English",
    "Egypt": "Egyptian",
    "El Salvador": "Salvadoran",
    "Equatorial Guinea": "Equatorial Guinean",
    "Eritrea": "Eritrean",
    "Estonia": "Estonian",
    "Eswatini": "Swazi",
    "Ethiopia": "Ethiopian",
    "Fiji": "Fijian",
    "Finland": "Finnish",
    "France": "French",
    "Gabon": "Gabonese",
    "Gambia": "Gambian",
    "Georgia": "Georgian",
    "Germany": "German",
    "Ghana": "Ghanaian",
    "Greece": "Greek",
    "Grenada": "Grenadian",
    "Guatemala": "Guatemalan",
    "Guinea": "Guinean",
    "Guinea-Bissau": "Guinea-Bissauan",
    "Guyana": "Guyanese",
    "Haiti": "Haitian",
    "Honduras": "Honduran",
    "Hungary": "Hungarian",
    "Iceland": "Icelander",
    "India": "Indian",
    "Indonesia": "Indonesian",
    "Iran": "Iranian",
    "Iraq": "Iraqi",
    "Ireland": "Irish",
    "Israel": "Israeli",
    "Italy": "Italian",
    "Jamaica": "Jamaican",
    "Japan": "Japanese",
    "Jordan": "Jordanian",
    "Kazakhstan": "Kazakhstani",
    "Kenya": "Kenyan",
    "Kiribati": "I-Kiribati",
    "Kuwait": "Kuwaiti",
    "Kyrgyzstan": "Kyrgyz",
    "Laos": "Laotian",
    "Latvia": "Latvian",
    "Lebanon": "Lebanese",
    "Lesotho": "Mosotho",
    "Liberia": "Liberian",
    "Libya": "Libyan",
    "Liechtenstein": "Liechtensteiner",
    "Lithuania": "Lithuanian",
    "Luxembourg": "Luxembourger",
    "Madagascar": "Malagasy",
    "Malawi": "Malawian",
    "Malaysia": "Malaysian",
    "Maldives": "Maldivan",
    "Mali": "Malian",
    "Malta": "Maltese",
    "Marshall Islands": "Marshallese",
    "Mauritania": "Mauritanian",
    "Mauritius": "Mauritian",
    "Mexico": "Mexican",
    "Micronesia": "Micronesian",
    "Moldova": "Moldovan",
    "Monaco": "Monacan",
    "Mongolia": "Mongolian",
    "Montenegro": "Montenegrin",
    "Morocco": "Moroccan",
    "Mozambique": "Mozambican",
    "Myanmar (formerly Burma)": "Burmese",
    "Namibia": "Namibian",
    "Nauru": "Nauruan",
    "Nepal": "Nepalese",
    "Netherlands": "Dutch",
    "New Zealand": "New Zealander",
    "Nicaragua": "Nicaraguan",
    "Niger": "Nigerien",
    "Nigeria": "Nigerian",
    "North Korea": "North Korean",
    "North Macedonia": "Macedonian",
    "Norway": "Norwegian",
    "Oman": "Omani",
    "Pakistan": "Pakistani",
    "Palau": "Palauan",
    "Palestine State": "Palestinian",
    "Panama": "Panamanian",
    "Papua New Guinea": "Papua New Guinean",
    "Paraguay": "Paraguayan",
    "Peru": "Peruvian",
    "Philippines": "Filipino",
    "Poland": "Polish",
    "Portugal": "Portuguese",
    "Qatar": "Qatari",
    "Romania": "Romanian",
    "Russia": "Russian",
    "Rwanda": "Rwandan",
    "Saint Kitts and Nevis": "Saint Kittian and Nevisian",
    "Saint Lucia": "Saint Lucian",
    "Saint Vincent and the Grenadines": "Saint Vincentian",
    "Samoa": "Samoan",
    "San Marino": "San Marinese",
    "Sao Tome and Principe": "Sao Tomean",
    "Saudi Arabia": "Saudi",
    "Scotland": "Scottish",
    "Senegal": "Senegalese",
    "Serbia": "Serbian",
    "Seychelles": "Seychellois",
    "Sierra Leone": "Sierra Leonean",
    "Singapore": "Singaporean",
    "Slovakia": "Slovak",
    "Slovenia": "Slovene",
    "Solomon Islands": "Solomon Islander",
    "Somalia": "Somali",
    "South Africa": "South African",
    "South Korea": "South Korean",
    "South Sudan": "South Sudanese",
    "Spain": "Spanish",
    "Sri Lanka": "Sri Lankan",
    "Sudan": "Sudanese",
    "Suriname": "Surinamer",
    "Sweden": "Swedish",
    "Switzerland": "Swiss",
    "Syria": "Syrian",
    "Taiwan": "Taiwanese",
    "Tajikistan": "Tajik",
    "Tanzania": "Tanzanian",
    "Thailand": "Thai",
    "Togo": "Togolese",
    "Tonga": "Tongan",
    "Trinidad and Tobago": "Trinidadian",
    "Tunisia": "Tunisian",
    "Turkey": "Turkish",
    "Turkmenistan": "Turkmen",
    "Tuvalu": "Tuvaluan",
    "Uganda": "Ugandan",
    "Ukraine": "Ukrainian",
    "United Arab Emirates": "Emirian",
    "United Kingdom": "British",
    "United States": "American",
    "Uruguay": "Uruguayan",
    "Uzbekistan": "Uzbek",
    "Vanuatu": "Ni-Vanuatu",
    "Venezuela": "Venezuelan",
    "Vietnam": "Vietnamese",
    "Wales": "Welsh",
    "Yemen": "Yemeni",
    "Zambia": "Zambian",
    "Zimbabwe": "Zimbabwean"
}
