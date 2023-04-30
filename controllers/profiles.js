import { Profile } from "../models/profile.js"

function index(req, res) {
    Profile.find({})
    .populate('polls')
    .then(profiles => {
        res.render(`profiles/index`, {
            profiles: profiles,
            title: "Pollfile Roulette",
        })
    })
    .catch(error => {
        console.log(error)
        res.redirect('/')
    })
}

function show(req, res) {
    Profile.findById(req.user.profile._id)
    .populate('polls')
    .then(profile => {
        res.render('profiles/show', {
            polls: profile.polls,
            title: "Pollfile",
        })
    })
    .catch(error => {
        console.log(error)
        res.redirect('/')
    })
}

export {
    index,
    show,
}