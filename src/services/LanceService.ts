import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class LanceService {
  async criarLance(valor: number, compradorId: number, leilaoId: number) {
    return prisma.lance.create({
      data: { valor, compradorId, leilaoId },
    });
  }

  async obterLances() {
    return prisma.lance.findMany();
  }
}

export default LanceService;
