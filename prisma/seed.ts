import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const client = await prisma.client.create({
    data: {
      name: 'Entreprise ABC',
      type: 'COMPANY',
      email: 'contact@abc.com',
      phone: '+21600000000',
      companyName: 'ABC Corp',
      address: 'Tunis',
    },
  });

  await prisma.opportunity.createMany({
    data: [
      {
        title: 'Projet CRM',
        amount: 15000,
        stage: 'LEAD',
        expectedCloseDate: new Date('2026-08-01'),
        clientId: client.id,
      },
      {
        title: 'Migration ERP',
        amount: 25000,
        stage: 'WON',
        expectedCloseDate: new Date('2026-07-01'),
        clientId: client.id,
      },
      {
        title: 'Support technique',
        amount: 5000,
        stage: 'NEGOTIATION',
        expectedCloseDate: new Date('2026-06-01'),
        clientId: client.id,
      },
    ],
  });
}

main()
  .then(() => console.log('Seed completed'))
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
