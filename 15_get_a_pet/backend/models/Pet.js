// Função para inserir um novo Pet
async function createPet(petData) {
    const { data, error } = await supabase.from('pets').insert([petData]);
  
    if (error) {
      console.error('Erro ao inserir pet:', error);
      return null;
    }
  
    console.log('Pet inserido com sucesso!');
    return data[0];
  }
  
  // Função para atualizar um Pet existente
  async function updatePet(petId, petData) {
    const { data, error } = await supabase
      .from('pets')
      .update(petData)
      .match({ id: petId });
  
    if (error) {
      console.error('Erro ao atualizar pet:', error);
      return null;
    }
  
    console.log('Pet atualizado com sucesso!');
    return data[0];
  }
  
  // Função para obter um Pet pelo ID
  async function getPetById(petId) {
    const { data, error } = await supabase
      .from('pets')
      .select()
      .match({ id: petId });
  
    if (error) {
      console.error('Erro ao obter pet:', error);
      return null;
    }
  
    return data[0];
  }
  
  module.exports = {
    createPet,
    updatePet,
    getPetById,
  };