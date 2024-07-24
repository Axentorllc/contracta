frappe.ui.form.on('Quotation', {
    refresh(frm) {
        frm.add_custom_button('Contract', function() {
            frappe.call({
                method: 'frappe.client.insert',
                args: {
                    doc: {
                        doctype: "Contract",
                        party_name: frm.doc.customer_name,
                        contract_terms: frm.doc.terms,
                        quotation: frm.doc.name
                    }
                },
                callback: function(response) {
                    let contract = response.message;
                    if (contract && contract.name) {
                        frappe.set_route("Form", "Contract", contract.name);
                    }
                }
            });
        }, __("Create"));
    }
});