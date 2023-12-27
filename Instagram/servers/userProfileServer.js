const db = require('../models/index.js')

const userProfileServer={
    createUserProfile: async(user_id,fullname,birthday,avatar,bio,gender,active,active_time)=>{
        try {
            await db.User_profile.create({
                user_id: user_id,
                fullname: fullname,
                birthday: birthday,
                avatar: avatar,
                bio: bio,
                gender:gender,
                active:active,
                active_time:active_time
            })
        } catch (error) {
            console.log(error)
        }
    },
    findUserProfileByUserID: async(userID)=>{
        try {
            const userProfile = await db.User_profile.findOne({
                where:{
                    user_id:userID
                }
            }) 
            return userProfile
        } catch (error) {
            console.log(error)
        }
        
    }
}

module.exports = userProfileServer