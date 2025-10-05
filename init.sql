-- Tabela de Projetos
CREATE TABLE Projects (
    id SERIAL PRIMARY KEY,
    client_name VARCHAR(255),
    client_email VARCHAR(255),
    project_title VARCHAR(255),
    status VARCHAR(50) DEFAULT 'Caixa de Entrada',
    original_email_body TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Cotações
CREATE TABLE Quotes (
    id SERIAL PRIMARY KEY,
    project_id INTEGER NOT NULL REFERENCES Projects(id) ON DELETE CASCADE,
    total_value NUMERIC(10, 2),
    status VARCHAR(50) DEFAULT 'Enviada',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Itens da Cotação
CREATE TABLE Quote_Items (
    id SERIAL PRIMARY KEY,
    quote_id INTEGER NOT NULL REFERENCES Quotes(id) ON DELETE CASCADE,
    description TEXT NOT NULL,
    price NUMERIC(10, 2) NOT NULL
);

-- Tabela de Anotações
CREATE TABLE Notes (
    id SERIAL PRIMARY KEY,
    project_id INTEGER NOT NULL REFERENCES Projects(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
