exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('ward')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('ward').insert([
                {
                    id: 1,
                    name: 'Nightingale',
                    number_beds: 400,
                    gender: 'Female',
                    ward_id: 'WARDBDBHJASJD7382'
                },
                {
                    id: 2,
                    name: 'St James',
                    number_beds: 250,
                    gender: 'Male',
                    ward_id: 'WARDBDBHJASJDJAS3432'
                },
                {
                    id: 3,
                    name: 'St Ann',
                    number_beds: 850,
                    gender: 'Female',
                    ward_id: 'WARDBDBHJAS324HS'
                },
                {
                    id: 4,
                    name: 'Peter Pan',
                    number_beds: 200,
                    gender: 'Children',
                    ward_id: 'WARDBDBHJASASJH82'
                },
                {
                    id: 5,
                    name: 'St Francis Emergency',
                    number_beds: 180,
                    gender: 'Emergency',
                    ward_id: 'WARDBDBHJASA342H82'
                }
            ]);
        });
};
