// Função para mostrar informações do sistema (O botão "Entender Arquitetura")
function showInfo() {
    const timestamp = new Date().toLocaleString('pt-BR');
    const info = `
☸️ Cluster: Amazon EKS (Kubernetes 1.30)
🐙 GitOps: Argo CD (Sincronização Automática)
📈 Escalabilidade: HPA (Horizontal Pod Autoscaler)
📅 Último Sync: ${timestamp}
☁️ Infraestrutura: AWS Provisionada via Terraform
🔄 Status Geral: Healthy & Synced
    `;
    alert(info);
}

// Inicialização e Telemetria no Console quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 K8s Cloud Lab - Frontend inicializado com sucesso!');
    console.log('☸️ Conectado ao cluster Amazon EKS');
    console.log('🐙 GitOps ativo: Repositório sendo monitorado pelo Argo CD');
    console.log('📈 HPA pronto para escalar Pods mediante uso de CPU');
    
    // Smooth scroll para links de navegação
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});