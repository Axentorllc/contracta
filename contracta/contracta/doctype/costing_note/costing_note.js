// Copyright (c) 2024, Andrew Romany and contributors
// For license information, please see license.txt

frappe.ui.form.on("Costing Note", {
    validate: function(frm) {
        frm.doc.costtype.forEach(function(row){
            row.total_cost = row.qty * row.unit_cost;
            row.tax_value = row.tax * row.total_cost;
            row.grand_total_with_tax = row.total_cost + row.tax_value;
        });
    },
});
