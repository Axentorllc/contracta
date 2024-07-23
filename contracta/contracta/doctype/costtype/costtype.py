# Copyright (c) 2024, Andrew Romany and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class CostType(Document):
	def validate(self):
		self.total_cost = self.qty * self.unit_cost
		self.tax_value = self.tax * self.total_cost
		self.grand_total_with_tax = self.total_cost + self.tax_value
