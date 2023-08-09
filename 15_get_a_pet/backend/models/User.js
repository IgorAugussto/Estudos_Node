const supabase = require('../db/conn')

// Função para inserir um novo Usuário
async function createUser(userData) {
    const { data, error } = await supabase.from('Users').insert([userData]);
  
    if (error) {
      console.error('Erro ao inserir usuário:', error);
      return null;
    }
  
    console.log('Usuário inserido com sucesso!');
    return getAllUsers();
  }
  
  // Função para atualizar um Usuário existente
  async function updateUser(userId, userData) {
    const { data, error } = await supabase
      .from('users')
      .update(userData)
      .match({ id: userId });
  
    if (error) {
      console.error('Erro ao atualizar usuário:', error);
      return null;
    } else {
      console.log('Usuário atualizado com sucesso!');
    return data[0];
    }
  
    
  }
  
  // Função para obter um Usuário pelo ID
  async function getUserById(userId) {
    const { data, error } = await supabase
      .from('users')
      .select()
      .match({ id: userId });
  
    if (error) {
      console.error('Erro ao obter usuário:', error);
      return null;
    }
  
    return data[0];
  }

  // Consulta para obter todos os usuários da tabela 'users'
  async function getAllUsers() {
    try {
      const { data, error } = await supabase.from('Users').select('*');
  
      if (error) {
        console.error('Erro ao obter usuários:', error);
        return null;
      }
  
      // Exibindo os resultados no console
      console.log('Usuários encontrados:');
      console.log(data);
  
      return data;
    } catch (error) {
      console.error('Erro ao obter usuários:', error.message);
      return null;
    }
  }
  
  module.exports = {
    createUser,
    updateUser,
    getUserById,
  };
