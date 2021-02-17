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
        },
        {
            id: 2,
            symptoms: 'Shivering, Fatigue',
            record_id: 'REC8334HS930',
            patient_id: 'PATIENT213612A',
            diagnosis: 'Malaria',
            prescribed_drugs: 'Anti Malaria Drugs',
            admin_id: 'ADM839sjd943'
        }
    ]);
};
