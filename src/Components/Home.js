import React from "react";

function Home() {
    return(
        <div className= "home">
            <h1>Welcome to Planet Explorer! Your guide through the stars.</h1>
            <p className="main-description">
                This tool can be used to keep track of your next interplanetary travel whenever we reach the stars.
                <br/>
                <br/>
                At the top of this application you will find a navigation bar, on it you will see a few different options to select from.
                Currently you should see that the Home tab is selected. This is where you can find out how to use this app.
                <br/>
                <br/>
                Next to that you should see the Itinerary tab. This tab will show you the current items within your travel itinerary.
                <br/>
                <br/>
                After that should be the Planet List tab. Here you can select planets that you would like to visit and add to your itinerary.
                <br/>
                <br/>
                Next is the Form tab, here you can submit your own custom planets onto the list. There are a few requirments 
                which you can find over on that tab. There are a few required form inputs that you will need to fill out
                as well. These planets are currently only stored in your specific itinerary. So make sure if you go to delete one of these
                planets that you wont need it again, because if you do you will need to fill out the form again to get it back!
                <br/>
                <br/>
                Last in this lineup will be the Random Planets tab! You can select how many random planets you want and will get back as many planets as
                you asked for. Now being that these are random, there is a slight chance that you can have items that match one another. Future
                updated to this application might fix this problem.
            </p>
            <p className="signature">
                This application has been built by James McKeag, Student at Flatirons school for Software Engineering.
            </p>
        </div>
    )
}

export default Home