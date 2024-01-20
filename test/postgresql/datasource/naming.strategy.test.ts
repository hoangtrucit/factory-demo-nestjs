import { SnakeNamingStrategy } from 'src/postgresql/datasource/naming.strategy';

describe('SnakeNamingStrategy', () => {
  let namingStrategy: SnakeNamingStrategy;
  const propertyName = 'myPropertyName';

  beforeAll(() => {
    namingStrategy = new SnakeNamingStrategy();
  });

  it('should return the custom table name if provided', () => {
    const className = 'MyClassName';
    const customName = 'custom_table_name';

    const result = namingStrategy.tableName(className, customName);
    expect(result).toBe(customName);
  });

  it('should return the snake case table name based on the class name if custom name is not provided', () => {
    const className = 'MyClassName';

    const result = namingStrategy.tableName(className, '');

    expect(result).toBe('my_class_name');
  });

  it('should return the custom column name if provided', () => {
    const customName = 'custom_column_name';
    const embeddedPrefixes: string[] = [];

    const result = namingStrategy.columnName(
      propertyName,
      customName,
      embeddedPrefixes,
    );

    expect(result).toBe(customName);
  });

  it('should return the snake case column name based on the property name if custom name is not provided', () => {
    const embeddedPrefixes: string[] = [];

    const result = namingStrategy.columnName(
      propertyName,
      '',
      embeddedPrefixes,
    );

    expect(result).toBe('my_property_name');
  });

  it('should return the snake case column name with embedded prefixes', () => {
    const embeddedPrefixes = ['prefix1', 'prefix2'];

    const result = namingStrategy.columnName(
      propertyName,
      '',
      embeddedPrefixes,
    );

    expect(result).toBe('prefix1_prefix2my_property_name');
  });

  it('should return the snake case relation name', () => {
    const result = namingStrategy.relationName(propertyName);

    expect(result).toBe('my_property_name');
  });

  it('should return the snake case join column name', () => {
    const relationName = 'myRelationName';
    const referencedColumnName = 'myReferencedColumn';

    const result = namingStrategy.joinColumnName(
      relationName,
      referencedColumnName,
    );

    expect(result).toBe('my_relation_name_my_referenced_column');
  });

  it('should return the snake case join table name', () => {
    const firstTableName = 'table1';
    const secondTableName = 'table2';
    const firstPropertyName = 'property.name';

    const result = namingStrategy.joinTableName(
      firstTableName,
      secondTableName,
      firstPropertyName,
    );

    expect(result).toBe('table1_property_name_table2');
  });

  it('should return the snake case join table column name with provided column name', () => {
    const tableName = 'table';
    const propertyName = 'property';
    const columnName = 'custom_column';

    const result = namingStrategy.joinTableColumnName(
      tableName,
      propertyName,
      columnName,
    );

    expect(result).toBe('table_custom_column');
  });

  it('should return the snake case join table column name with property name if no column name provided', () => {
    const tableName = 'table';
    const propertyName = 'property';

    const result = namingStrategy.joinTableColumnName(tableName, propertyName);

    expect(result).toBe('table_property');
  });

  it('should return the snake case parent column name', () => {
    const parentTableName = 'parent_table';
    const parentTableIdPropertyName = 'parent_table_id';

    const result = namingStrategy.classTableInheritanceParentColumnName(
      parentTableName,
      parentTableIdPropertyName,
    );

    expect(result).toBe('parent_table_parent_table_id');
  });
});
