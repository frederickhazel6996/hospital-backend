exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('drug')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('drug').insert([
                {
                    id: 1,
                    name: 'Venlafaxine',
                    cost: 'GHC250',
                    stock: 150,
                    drug_id: 'DRUGSKADHJ239S',
                    type_drug_1: 'Anti Depressant',
                    type_drug_2: 'Prescription',
                    dosage: '75mg',
                    manufacturer: 'Pfizer',
                    warning:
                        'If you have diabetes, venlafaxine can make it more difficult to keep your blood sugar stable. Monitor your blood sugar more often for the first few weeks of treatment with venlafaxine and adjust your diabetes treatment if necessary.',
                    uses:
                        'Venlafaxine is used to treat depression. It may improve your mood and energy level, and may help restore your interest in daily living. Venlafaxine is known as a serotonin-norepinephrine reuptake inhibitor (SNRI). It works by helping to restore the balance of certain natural substances (serotonin and norepinephrine) in the brain.'
                },
                {
                    id: 2,
                    name: 'Tylenol',
                    cost: 'GHC90',
                    stock: 800,
                    drug_id: 'DRUGSKSHAD3I',
                    type_drug_1: 'Pain Killer',
                    type_drug_2: 'OTC',
                    dosage: '500mg',
                    manufacturer: 'McNeil Consumer Healthcare',
                    warning:
                        'Liver warning: This product contains acetaminophen. Severe liver damage may occur if: adult takes more than 12 caplets in 24 hours, which is the maximum daily amount. child takes more than 5 doses in 24 hours, which is the maximum daily amount',
                    uses:
                        'This drug is used to treat mild to moderate pain (from headaches, menstrual periods, toothaches, backaches, osteoarthritis, or cold/flu aches and pains) and to reduce fever.'
                }
            ]);
        });
};
