报错内容：
**_UnicodeDecodeError: 'gbk' codec can't decode byte 0xac in position 140: illegal multibyte sequence_**

解决方式:源代码subprocess.py包中，修改代码
    def __init__(self, args, bufsize=-1, executable=None,
                 stdin=None, stdout=None, stderr=None,
                 preexec_fn=None, close_fds=True,
                 shell=False, cwd=None, env=None, universal_newlines=None,
                 startupinfo=None, creationflags=0,
                 restore_signals=True, start_new_session=False,
                 pass_fds=(), *, user=None, group=None, extra_groups=None,
                 **_encoding=None_**, errors=None, text=None, umask=-1, pipesize=-1,
                 process_group=None):

将参数encoding=None， 修改为encoding="UTF-8"