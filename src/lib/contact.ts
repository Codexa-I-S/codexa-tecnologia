export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export async function submitContactForm(data: ContactFormData) {
  try {
    const formSubmitUrl = 'https://formsubmit.co/codexa.technologgy@gmail.com';
    const submitData = new FormData();
    
    submitData.append('name', data.name);
    submitData.append('email', data.email);
    submitData.append('company', data.company || '');
    submitData.append('message', data.message);
    submitData.append('_subject', 'Nova mensagem do site CODEXA');
    submitData.append('_captcha', 'false');
    submitData.append('_template', 'table');

    const response = await fetch(formSubmitUrl, {
      method: 'POST',
      body: submitData,
    });

    if (response.ok) {
      return { success: true, message: 'Email enviado com sucesso!' };
    } else {
      return { success: false, message: 'Erro ao enviar email' };
    }
  } catch (error) {
    return { success: false, message: 'Erro interno do servidor' };
  }
}