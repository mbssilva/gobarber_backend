import Bee from 'bee-queue';

import CancellationMail from '../app/jobs/CancellationMail';

import redisConfig from '../config/redis';

const jobs = [CancellationMail];

class Queue {
  constructor() {
    this.queues = {};

    this.init();
  }

  init() {
    // Iniciando a fila, ligando os jobs aos seus bancos de dados
    jobs.forEach(({ key, handle }) => {
      this.queues[key] = {
        // A variável "bee" poderia ter qualquer nome
        bee: new Bee(key, {
          radis: redisConfig,
        }),
        handle,
      };
    });
  }

  add(key, job) {
    // Adicionando novos jobs à fila
    return this.queues[key].bee.createJob(job).save();
  }

  processQueue() {
    // Processando os jobs
    jobs.forEach(job => {
      const { bee, handle } = this.queues[job.key];

      bee.on('failed', this.handleFailure).process(handle);
    });
  }

  handleFailure(job, err) {
    console.log(`Queue ${job.queue.name}: FAILED`, err);
  }
}

export default new Queue();
