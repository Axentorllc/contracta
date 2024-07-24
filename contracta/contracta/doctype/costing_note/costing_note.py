# Copyright (c) 2024, Andrew Romany and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class CostingNote(Document):
	def validate(self):
		for calucate in self.costtype:
			calucate.amount = calucate.qty * calucate.unit_cost
			calucate.tax_value = calucate.tax * calucate.amount
			calucate.grand_total_with_tax = calucate.amount + calucate.tax_value
