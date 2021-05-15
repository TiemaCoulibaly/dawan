class HomeController {

    index(req, res) {

        const users = [
            { firstname: 'John', lastname: 'Doe' },
            { firstname: 'Jane', lastname: 'Doe' },
        ];

        res.render('home/index.html', { users });
    }

    about(req, res) {
        const name = req.params.name;

        res.render('home/about.html', { name }); // { name: name}
    }

}

export default new HomeController();