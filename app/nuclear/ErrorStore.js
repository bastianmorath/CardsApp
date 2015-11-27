
        // add an id to the flashcards.
        // check if all the data is present.
        // TODO: find library that checks the passed arguments.
        /**
         * If we pass the wrong values to an action or API method, it's most likely
         * caused by an error the user can not do anything about.
         * Still we want the user know that an error occured and that we are going
         * to do something about it. So we will present a pop up anyway.
         * Iternally we need to log ALL ALL of this errors. This is valuable data
         * that we need to collect, to improve our app over the long term.
         *
         * Arguements of functions are checked at the API and the actions level,
         * because they may differ. I need to find a good library for checking the
         * arguemnts passed to a function.
         *
         * Now how do we log this errors the best way. There needs to be a component /
         * global function, that every error is passed to. For me the most natural
         * way would be to dispatch an error using an action. There would be an error
         * pop-up component, that would display the error message to the user.
         */
