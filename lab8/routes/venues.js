//Import express and express router as shown in lecture code and worked in previous labs
//You can make your axios calls to the API directly in the routes
import Router from "express"
import axios from "axios"

const router = Router();

const API_KEY = "qStCj44hH3ZuU8QVJMep33SsT5I8AGLA";
const baseURL = "https://app.ticketmaster.com/discovery/v2/"

router.route('/')
    .get(async (req, res) => {
        //code here for GET
        res.render("homepage", {title: "Venue Finder"});
    });

router.route('/searchvenues')
    .post(async (req, res) => {
        //code here for POST
        const searchVenues = req.body.searchVenueTerm;
        try {
            let venueList = await axios.get(`${baseURL}venues?keyword=${searchVenues}&apikey=${API_KEY}&countryCode=US`);
            if (venueList.data._embedded && Object.keys(venueList.data._embedded).length > 0) {
                const venues = venueList.data._embedded.venues.slice(0, 10);
                res.render("venueSearchResults", {
                    title: "Venues Found",
                    searchVenueTerm: searchVenues,
                    venueData: venues
                });
            } else {
                res.render("venueNotFound", {
                    title: "Venues Not Found",
                    searchVenueTerm: searchVenues
                });
            }
        } catch (error) {
            res.status(400).render("error", {title: "Error", error: error});
        }
    });

router.route('/venuedetails/:id')
    .get(async (req, res) => {
        //code here for GET
        const venueId = req.params.id;
        try {
            let venueData = await axios.get(`${baseURL}venues/${venueId}?&apikey=${API_KEY}&countryCode=US`);
            let image = venueData.data.images[0].url;

            if (venueData.data) {
                res.render("venueByID", {
                    title: "Venue Details",
                    venueData: venueData.data,
                    image: image
                })
            }
        } catch (error) {
            if (error.response && error.response.status === 404) {
                res.render("venueNotFound", {
                    searchVenueTerm: venueId
                });
            } else {
                res.status(400).render("error", {error});
            }
        }
    });

export default router;