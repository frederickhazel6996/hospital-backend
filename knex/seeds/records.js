exports.seed = function (knex) {
    // Deletes ALL existing entries

    return knex('record').insert([
        {
            id: 1,
            symptoms: 'Coughing, and Sneezing',
            record_id: 'REC1p53612A',
            patient_id: 'PATIENT213612A',
            diagnosis: 'Covid',
            prescribed_drugs: 'Zinc',
            admin_id: 'ADM839sjd943'
        }
    ]);
};
