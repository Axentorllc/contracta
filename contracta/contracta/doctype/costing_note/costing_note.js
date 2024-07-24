// Copyright (c) 2024, Andrew Romany and contributors
// For license information, please see license.txt

frappe.ui.form.on("Costing Note", {
    validate: function(frm) {
        frm.doc.costtype.forEach(function(row){
            row.amount = row.qty * row.unit_cost;
            row.tax_value = row.tax * row.amount;
            row.grand_total_with_tax = row.amount + row.tax_value;
        });
    },
});
