var Client: {
    ClientID: Number,
    ContactID: Number,
    mainPOC: String,
    description: String,
    aboutImg: String,
    companyName: String,
    companyNumber: Number,
    isBanned: Boolean,
    role: String
}

var Contacts {
    ClientID: Number,
    ContactID: Number,
    mainPOC: String,
    phoneNumber: Number,
    firstName: String,
    lastName: String,
    email: String,
    isBanned: Boolean
}

var POD: {
    PodID: Number,
    ClientID: Number,
    displayName: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    role: String,
    isBanned: Boolean,
    startDate: {
        type: Date,
        default: Date now
    },
    updatedDate: {
        type: Date,
        default: Date now

    },
    personal: {
        phoneNumber: Number,
        address1: String,
        address2: String,
        postcode: String,
        county: String,
        town: String,
        nationality: String
    },
    info: {
        testimonials: String,
        rating: Number,
        skills: Array,
        credits: String,
        currentlyEmployed: Boolean,
    },
    profile: {
        podImg: String,
        description: String,
        workHistory: String,
        distanceToTravel: String,
        skills: Array,
        preference: String

    }
}

//Booking
var Booking {
    BookingID: Number,
    bookingState: String,
    PodID: Number,
    ClientID: Number,
    bookingType: String,
    createdAt: {
        type: Date,
        default: Date now
    },
    updatedAt: {
        type: Date,
        default: Date now
    }
    bookingInfo = {
        infoID: Number,
        BookingID: Number,
        PodID: String,
        StartTime: Date,
        EndTime: Date,
        Location: String,
        Status: Boolean,
        bookingDuration: String
 }
}

var superAdmin = {
    superID: Number,
    password: String,
    isSuperAdmin: Boolean,
    isAdmin: Boolean,
    canBan: Boolean
    Admin: {
        AdminID: Number,
        password: String,
        type: String,
        isAdmin: Boolean
    }
}
