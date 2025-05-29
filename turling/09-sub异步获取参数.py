import subprocess

if __name__ == '__main__':
    # 使用 subprocess 模块执行 Node.js 命令
    result = subprocess.run(["node", "09-异步获取参数.js", "dcb", "7", "5"], capture_output=True, text=True, encoding="utf-8")

    # 输出执行结果
    print(f"Node.js 执行结果: {result.stdout.strip()}")