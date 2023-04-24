from mathesar.models.base import Constraint
from mathesar.api.serializers.constraints import ConstraintSerializer


def is_unique_column(column_id, table):
    constraints = Constraint.objects.filter(table=table)
    for constraint in constraints:
        constraint_serializer_data = ConstraintSerializer(constraint).data
        if column_id in constraint_serializer_data['columns'] and constraint_serializer_data['type'] == 'unique':
            return True
    return False
