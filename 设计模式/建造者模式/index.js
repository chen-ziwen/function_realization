// 用于创建一个复杂对象，将对象的构建过程分解成多个步骤，使得同样的构建过程可以创建不同的表示。

// Product: 表示要构建的复杂对象
class Computer {
    constructor() {
        this.cpu = "";
        this.gpu = "";
        this.memory = "";
        this.ram = 0;
    }

    describe() {
        return `这台电脑配置为：CPU: ${this.cpu}，GPU: ${this.gpu}，内存: ${this.memory}，RAM: ${this.ram}GB`;
    }
}

// builder: 声明构建复杂对象的接口
class ComputerBuilder {
    constructor() {
        this.computer = new Computer(); // 这种使用方式就叫组合
    }

    setCPU(cpu) {
        this.computer.cpu = cpu;
        return this;
    }

    setGPU(gpu) {
        this.computer.gpu = gpu;
        return this;
    }

    setMemory(memory) {
        this.computer.memory = memory;
        return this;
    }

    setRAM(ram) {
        this.computer.ram = ram;
        return this;
    }

    build() {
        return this.computer;
    }
}

// Director: 责使用 Builder 构建复杂对象
class ComputerDirector {
    // 构建出电脑的具体信息
    constructComputer(builder) {
        return builder
            .setCPU("Intel i7")
            .setGPU("NVIDIA RTX 3080")
            .setMemory("Kingston HyperX Predator")
            .setRAM(64)
            .build();
    }
}

// 使用建造者模式创建复杂电脑
const engineer = new ComputerDirector();
const builder = new ComputerBuilder();

// 执行 build 后相当于结束了，就不能再链式调用了
const highEndComputer = engineer.constructComputer(builder);
console.log(highEndComputer.describe()); // 输出: 这台电脑配置为：CPU: Intel i7，GPU: NVIDIA RTX 3080，内存: Kingston HyperX Predator，RAM: 64GB

const midRangeComputer = builder.setCPU("AMD Ryzen 6").setRAM(16).build();
console.log(midRangeComputer.describe()); // 输出: 这台电脑配置为：CPU: AMD Ryzen 6，GPU: NVIDIA RTX 3080，内存: Kingston HyperX Predator，RAM: 16GB