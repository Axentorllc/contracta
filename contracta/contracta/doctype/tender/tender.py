# Copyright (c) 2024, Andrew Romany and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class Tender(Document):

	def validate(self):
		for boq in self.boqs:
			if boq.total_costing and boq.margin:
				boq.amount = boq.total_costing + boq.margin
			elif boq.total_costing and boq.amount:
				boq.margin = boq.amount - boq.total_costing
