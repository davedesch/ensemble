# ensemble
Dev Bootcamp Phase 3 Final Project.
TEAM: Dave Descheneaux, Saleh Rastani, Peter Fitzpatrick, Jessie Rushing

DB Schema
![db](/schema.png)


Layout-
navbar gets:
	- home
	- add/upload new ensemble
	- favorites dropdown
		- users
		- outfits
		- ratings
		- hashtags
	- logout

Routes-
post '/login' -reidrect to main page
get 'users/new' -new user sign up form

get '/users/:id' - show dashboard
	dashboard gets:
	- search box = start with hashtags
	- long scroll timeline (recently uploaded outfits from other users)
		- title
		- image
		- average rating (stars?)
		- articles list (clothing types descs)
		- caption
		- hanger to "favorite" this outfit
		- list of ratings?
		- empty stars to add your review, on click slides out a review box
	list can be sorted by date(created at), popularity(rating count * average stars), ratings(highest avg stars)

	- my recent outfits widget
	- trending widget

get '/users/user_id/ensembles/new'
	upload a new outfit

get 'users/user_id/ensembles'
	list of user's outfits

post 'users/user_id/ensembles'
	saves a new outfit for that user

post 'users/user_id/ensembles/ensemble_id/reviews/new'
	saves a new review

get 'users/user_id/favorites/users'
	list of a users favorite users

get 'users/user_id/favorites/hashtags'
	list of a users favorite hashtags

get 'users/user_id/favorites/outfits'
	list of a users favorite outfits


? get 'hashtags'
	list of trending hashtags

? get 'hashtags/id/ensembles'
	list of ensembles with
