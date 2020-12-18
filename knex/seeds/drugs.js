exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('drug')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('drug').insert([
                { id: 1, name: 'drug1', stock: 250, drug_id: 'DRUGSKADHJ239s' },
                { id: 2, name: 'drug2', stock: 250, drug_id: 'DRUGSKADHJ239a' },
                { id: 3, name: 'drug3', stock: 250, drug_id: 'DRUGSKADHJ239h' }
            ]);
        });
};
