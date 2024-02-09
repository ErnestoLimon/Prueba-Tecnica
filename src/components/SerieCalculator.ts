// src/SerieCalculator.ts
export class SerieCalculator {
    static primoEnPosicion(n: number): number {
      let contador = 0,
        num = 2;
      while (contador < n) {
        if (this.esPrimo(num)) {
          contador++;
        }
        num++;
      }
      return num - 1;
    }
  
    static esPrimo(num: number): boolean {
      for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
      }
      return num > 1;
    }
  
    static triangular(n: number): number {
      return (n * (n + 1)) / 2;
    }
  
    static fibonacci(n: number): number {
      let a = 0,
        b = 1,
        temp;
      for (let i = 0; i < n; i++) {
        temp = a;
        a = b;
        b = temp + b;
      }
      return a;
    }
  
    static serie(n: number): number {
      if (n === 0 || n < 0) {
        return 0;
      }
      return (
        4 * this.primoEnPosicion(n) -
        this.triangular(n - 1) +
        this.fibonacci(n + 2)
      );
    }
  }
  