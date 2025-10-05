/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  // 1. Criar a tabela de Categorias
  pgm.createTable('Categories', {
    id: 'id',
    name: { type: 'varchar(100)', notNull: true, unique: true },
    created_at: {
      type: 'timestamp with time zone',
      default: pgm.func('current_timestamp'),
    },
  });

  // 2. Adicionar a coluna category_id na tabela Projects
  pgm.addColumn('Projects', {
    category_id: {
      type: 'integer',
      references: '"Categories"',
      onDelete: 'SET NULL', // Se uma categoria for deletada, o projeto fica sem categoria
    },
  });
};

exports.down = (pgm) => {
  // Reverte as operações na ordem inversa
  pgm.dropColumn('Projects', 'category_id');
  pgm.dropTable('Categories');
};

