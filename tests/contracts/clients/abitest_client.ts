import algosdk from "algosdk";
import * as bkr from "beaker-ts";
export class AbiTest extends bkr.ApplicationClient {
    desc: string = "";
    override appSchema: bkr.Schema = { declared: { gRef: { type: bkr.AVMType.bytes, key: "gRef", desc: "", static: false }, gMap: { type: bkr.AVMType.bytes, key: "gMap", desc: "", static: false } }, reserved: {} };
    override acctSchema: bkr.Schema = { declared: { lRef: { type: bkr.AVMType.bytes, key: "lRef", desc: "", static: false }, lMap: { type: bkr.AVMType.bytes, key: "lMap", desc: "", static: false } }, reserved: {} };
    override approvalProgram: string = "I3ByYWdtYSB2ZXJzaW9uIDgKCWIgbWFpbgoKYmFyZV9yb3V0ZV9jcmVhdGU6CglieXRlIDB4CglkdXBuIDEKCWNhbGxzdWIgY3JlYXRlCglpbnQgMQoJcmV0dXJuCgpjcmVhdGU6Cglwcm90byAxIDAKCXJldHN1YgoKYmFyZV9yb3V0ZV9vcHRJbjoKCWJ5dGUgMHgKCWR1cG4gMQoJY2FsbHN1YiBvcHRJbgoJaW50IDEKCXJldHVybgoKb3B0SW46Cglwcm90byAxIDAKCXJldHN1YgoKYWJpX3JvdXRlX3N0YXRpY0FycmF5OgoJdHhuIE9uQ29tcGxldGlvbgoJaW50IE5vT3AKCT09Cglhc3NlcnQKCWJ5dGUgMHgKCWR1cG4gMgoJY2FsbHN1YiBzdGF0aWNBcnJheQoJaW50IDEKCXJldHVybgoKc3RhdGljQXJyYXk6Cglwcm90byAyIDAKCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjMwCgkvLyBhOiBTdGF0aWNBcnJheTx1aW50NjQsIDM+ID0gWzExLCAyMiwgMzNdCglieXRlIDB4MDAwMDAwMDAwMDAwMDAwYjAwMDAwMDAwMDAwMDAwMTYwMDAwMDAwMDAwMDAwMDIxCglmcmFtZV9idXJ5IC0xIC8vIGE6IHVpbnQ2NFszXQoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6MzIKCS8vIHJldHVybiBhWzFdOwoJZnJhbWVfZGlnIC0xIC8vIGE6IHVpbnQ2NFszXQoJZXh0cmFjdCA4IDgKCWJ0b2kKCWl0b2IKCWJ5dGUgMHgxNTFmN2M3NQoJc3dhcAoJY29uY2F0Cglsb2cKCXJldHN1YgoKYWJpX3JvdXRlX3JldHVyblN0YXRpY0FycmF5OgoJdHhuIE9uQ29tcGxldGlvbgoJaW50IE5vT3AKCT09Cglhc3NlcnQKCWJ5dGUgMHgKCWR1cG4gMgoJY2FsbHN1YiByZXR1cm5TdGF0aWNBcnJheQoJaW50IDEKCXJldHVybgoKcmV0dXJuU3RhdGljQXJyYXk6Cglwcm90byAyIDAKCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjM2CgkvLyBhOiBTdGF0aWNBcnJheTx1aW50NjQsIDM+ID0gWzExLCAyMiwgMzNdCglieXRlIDB4MDAwMDAwMDAwMDAwMDAwYjAwMDAwMDAwMDAwMDAwMTYwMDAwMDAwMDAwMDAwMDIxCglmcmFtZV9idXJ5IC0xIC8vIGE6IHVpbnQ2NFszXQoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6MzgKCS8vIHJldHVybiBhOwoJZnJhbWVfZGlnIC0xIC8vIGE6IHVpbnQ2NFszXQoJYnl0ZSAweDE1MWY3Yzc1Cglzd2FwCgljb25jYXQKCWxvZwoJcmV0c3ViCgphYmlfcm91dGVfc3RhdGljQXJyYXlBcmc6Cgl0eG4gT25Db21wbGV0aW9uCglpbnQgTm9PcAoJPT0KCWFzc2VydAoJYnl0ZSAweAoJZHVwbiAxCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAxCgljYWxsc3ViIHN0YXRpY0FycmF5QXJnCglpbnQgMQoJcmV0dXJuCgpzdGF0aWNBcnJheUFyZzoKCXByb3RvIDIgMAoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6NDIKCS8vIHJldHVybiBhWzFdOwoJZnJhbWVfZGlnIC0xIC8vIGE6IHVpbnQ2NFszXQoJZXh0cmFjdCA4IDgKCWJ0b2kKCWl0b2IKCWJ5dGUgMHgxNTFmN2M3NQoJc3dhcAoJY29uY2F0Cglsb2cKCXJldHN1YgoKYWJpX3JvdXRlX25vbkxpdGVyYWxTdGF0aWNBcnJheUVsZW1lbnRzOgoJdHhuIE9uQ29tcGxldGlvbgoJaW50IE5vT3AKCT09Cglhc3NlcnQKCWJ5dGUgMHgKCWR1cG4gNQoJY2FsbHN1YiBub25MaXRlcmFsU3RhdGljQXJyYXlFbGVtZW50cwoJaW50IDEKCXJldHVybgoKbm9uTGl0ZXJhbFN0YXRpY0FycmF5RWxlbWVudHM6Cglwcm90byA1IDAKCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjQ2CgkvLyBuMSA9IDExCglpbnQgMTEKCWZyYW1lX2J1cnkgLTEgLy8gbjE6IHVpbnQ2NAoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6NDcKCS8vIG4yID0gMjIKCWludCAyMgoJZnJhbWVfYnVyeSAtMiAvLyBuMjogdWludDY0CgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czo0OAoJLy8gbjMgPSAzMwoJaW50IDMzCglmcmFtZV9idXJ5IC0zIC8vIG4zOiB1aW50NjQKCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjQ5CgkvLyBhOiBTdGF0aWNBcnJheTx1aW50NjQsIDM+ID0gW24xLCBuMiwgbjNdCglmcmFtZV9kaWcgLTEgLy8gbjE6IHVpbnQ2NAoJaXRvYgoJZnJhbWVfZGlnIC0yIC8vIG4yOiB1aW50NjQKCWl0b2IKCWNvbmNhdAoJZnJhbWVfZGlnIC0zIC8vIG4zOiB1aW50NjQKCWl0b2IKCWNvbmNhdAoJZnJhbWVfYnVyeSAtNCAvLyBhOiB1aW50NjRbM10KCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjUxCgkvLyByZXR1cm4gYVsxXTsKCWZyYW1lX2RpZyAtNCAvLyBhOiB1aW50NjRbM10KCWV4dHJhY3QgOCA4CglidG9pCglpdG9iCglieXRlIDB4MTUxZjdjNzUKCXN3YXAKCWNvbmNhdAoJbG9nCglyZXRzdWIKCmFiaV9yb3V0ZV9taXhlZFN0YXRpY0FycmF5RWxlbWVudHM6Cgl0eG4gT25Db21wbGV0aW9uCglpbnQgTm9PcAoJPT0KCWFzc2VydAoJYnl0ZSAweAoJZHVwbiA1CgljYWxsc3ViIG1peGVkU3RhdGljQXJyYXlFbGVtZW50cwoJaW50IDEKCXJldHVybgoKbWl4ZWRTdGF0aWNBcnJheUVsZW1lbnRzOgoJcHJvdG8gNSAwCgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czo1NQoJLy8gbjEgPSAzCglpbnQgMwoJZnJhbWVfYnVyeSAtMSAvLyBuMTogdWludDY0CgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czo1NgoJLy8gbjIgPSA0CglpbnQgNAoJZnJhbWVfYnVyeSAtMiAvLyBuMjogdWludDY0CgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czo1NwoJLy8gbjMgPSA1CglpbnQgNQoJZnJhbWVfYnVyeSAtMyAvLyBuMzogdWludDY0CgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czo1OAoJLy8gYTogU3RhdGljQXJyYXk8dWludDY0LCA5PiA9IFswLCAxLCAyLCBuMSwgbjIsIG4zLCA2LCA3LCA4XQoJYnl0ZSAweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDAwMDAwMDAwMDAwMDAwMgoJZnJhbWVfZGlnIC0xIC8vIG4xOiB1aW50NjQKCWl0b2IKCWNvbmNhdAoJZnJhbWVfZGlnIC0yIC8vIG4yOiB1aW50NjQKCWl0b2IKCWNvbmNhdAoJZnJhbWVfZGlnIC0zIC8vIG4zOiB1aW50NjQKCWl0b2IKCWNvbmNhdAoJYnl0ZSAweDAwMDAwMDAwMDAwMDAwMDYwMDAwMDAwMDAwMDAwMDA3MDAwMDAwMDAwMDAwMDAwOAoJY29uY2F0CglmcmFtZV9idXJ5IC00IC8vIGE6IHVpbnQ2NFs5XQoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6NjAKCS8vIHJldHVybiBhWzFdICsgYVs0XSArIGFbN107CglmcmFtZV9kaWcgLTQgLy8gYTogdWludDY0WzldCglleHRyYWN0IDggOAoJYnRvaQoJZnJhbWVfZGlnIC00IC8vIGE6IHVpbnQ2NFs5XQoJZXh0cmFjdCAzMiA4CglidG9pCgkrCglmcmFtZV9kaWcgLTQgLy8gYTogdWludDY0WzldCglleHRyYWN0IDU2IDgKCWJ0b2kKCSsKCWl0b2IKCWJ5dGUgMHgxNTFmN2M3NQoJc3dhcAoJY29uY2F0Cglsb2cKCXJldHN1YgoKYWJpX3JvdXRlX25vbkxpdGVyYWxTdGF0aWNBcnJheUFjY2VzczoKCXR4biBPbkNvbXBsZXRpb24KCWludCBOb09wCgk9PQoJYXNzZXJ0CglieXRlIDB4CglkdXBuIDMKCWNhbGxzdWIgbm9uTGl0ZXJhbFN0YXRpY0FycmF5QWNjZXNzCglpbnQgMQoJcmV0dXJuCgpub25MaXRlcmFsU3RhdGljQXJyYXlBY2Nlc3M6Cglwcm90byAzIDAKCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjY0CgkvLyBhOiBTdGF0aWNBcnJheTx1aW50NjQsIDM+ID0gWzExLCAyMiwgMzNdCglieXRlIDB4MDAwMDAwMDAwMDAwMDAwYjAwMDAwMDAwMDAwMDAwMTYwMDAwMDAwMDAwMDAwMDIxCglmcmFtZV9idXJ5IC0xIC8vIGE6IHVpbnQ2NFszXQoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6NjUKCS8vIG4gPSAxCglpbnQgMQoJZnJhbWVfYnVyeSAtMiAvLyBuOiB1aW50NjQKCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjY3CgkvLyByZXR1cm4gYVtuXTsKCWZyYW1lX2RpZyAtMSAvLyBhOiB1aW50NjRbM10KCWZyYW1lX2RpZyAtMiAvLyBuOiB1aW50NjQKCWludCA4CgkqCglpbnQgOAoJZXh0cmFjdDMKCWJ0b2kKCWl0b2IKCWJ5dGUgMHgxNTFmN2M3NQoJc3dhcAoJY29uY2F0Cglsb2cKCXJldHN1YgoKYWJpX3JvdXRlX3NldFN0YXRpY0FycmF5RWxlbWVudDoKCXR4biBPbkNvbXBsZXRpb24KCWludCBOb09wCgk9PQoJYXNzZXJ0CglieXRlIDB4CglkdXBuIDIKCWNhbGxzdWIgc2V0U3RhdGljQXJyYXlFbGVtZW50CglpbnQgMQoJcmV0dXJuCgpzZXRTdGF0aWNBcnJheUVsZW1lbnQ6Cglwcm90byAyIDAKCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjcxCgkvLyBhOiBTdGF0aWNBcnJheTx1aW50NjQsIDM+ID0gWzExLCAyMiwgMzNdCglieXRlIDB4MDAwMDAwMDAwMDAwMDAwYjAwMDAwMDAwMDAwMDAwMTYwMDAwMDAwMDAwMDAwMDIxCglmcmFtZV9idXJ5IC0xIC8vIGE6IHVpbnQ2NFszXQoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6NzMKCS8vIGFbMV0gPSAyMjIKCWZyYW1lX2RpZyAtMSAvLyBhOiB1aW50NjRbM10KCWludCA4IC8vIG9mZnNldCBjYWxjdWxhdGVkIGZyb20gbGl0ZXJhbCBhY2Nlc3MgYXJndW1lbnRzCglpbnQgMjIyCglpdG9iCglyZXBsYWNlMwoJZnJhbWVfYnVyeSAtMSAvLyBhOiB1aW50NjQKCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjc1CgkvLyByZXR1cm4gYVsxXTsKCWZyYW1lX2RpZyAtMSAvLyBhOiB1aW50NjRbM10KCWV4dHJhY3QgOCA4CglidG9pCglpdG9iCglieXRlIDB4MTUxZjdjNzUKCXN3YXAKCWNvbmNhdAoJbG9nCglyZXRzdWIKCmFiaV9yb3V0ZV9zdGF0aWNBcnJheUluU3RvcmFnZVJlZjoKCXR4biBPbkNvbXBsZXRpb24KCWludCBOb09wCgk9PQoJYXNzZXJ0CglieXRlIDB4CglkdXBuIDMKCWNhbGxzdWIgc3RhdGljQXJyYXlJblN0b3JhZ2VSZWYKCWludCAxCglyZXR1cm4KCnN0YXRpY0FycmF5SW5TdG9yYWdlUmVmOgoJcHJvdG8gMyAwCgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czo3OQoJLy8gYTogU3RhdGljQXJyYXk8dWludDY0LCAzPiA9IFsxMSwgMjIsIDMzXQoJYnl0ZSAweDAwMDAwMDAwMDAwMDAwMGIwMDAwMDAwMDAwMDAwMDE2MDAwMDAwMDAwMDAwMDAyMQoJZnJhbWVfYnVyeSAtMSAvLyBhOiB1aW50NjRbM10KCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjgxCgkvLyB0aGlzLmdSZWYucHV0KGEpCglieXRlICJnUmVmIgoJZnJhbWVfZGlnIC0xIC8vIGE6IHVpbnQ2NFszXQoJYXBwX2dsb2JhbF9wdXQKCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjgyCgkvLyB0aGlzLmxSZWYucHV0KHRoaXMudHhuLnNlbmRlciwgYSkKCXR4biBTZW5kZXIKCWJ5dGUgImxSZWYiCglmcmFtZV9kaWcgLTEgLy8gYTogdWludDY0WzNdCglhcHBfbG9jYWxfcHV0CgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czo4MwoJLy8gdGhpcy5iUmVmLnB1dChhKQoJYnl0ZSAiYlJlZiIKCWZyYW1lX2RpZyAtMSAvLyBhOiB1aW50NjRbM10KCWJveF9wdXQKCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjg1CgkvLyByZXQ6IFN0YXRpY0FycmF5PHVpbnQ2NCwgMz4gPSBbCglieXRlICJnUmVmIgoJYXBwX2dsb2JhbF9nZXQKCWV4dHJhY3QgOCA4CglidG9pCglpdG9iCgl0eG4gU2VuZGVyCglieXRlICJsUmVmIgoJYXBwX2xvY2FsX2dldAoJZXh0cmFjdCA4IDgKCWJ0b2kKCWl0b2IKCWNvbmNhdAoJYnl0ZSAiYlJlZiIKCWJveF9nZXQKCWFzc2VydAoJZXh0cmFjdCA4IDgKCWJ0b2kKCWl0b2IKCWNvbmNhdAoJZnJhbWVfYnVyeSAtMiAvLyByZXQ6IHVpbnQ2NFszXQoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6OTEKCS8vIHJldHVybiByZXQ7CglmcmFtZV9kaWcgLTIgLy8gcmV0OiB1aW50NjRbM10KCWJ5dGUgMHgxNTFmN2M3NQoJc3dhcAoJY29uY2F0Cglsb2cKCXJldHN1YgoKYWJpX3JvdXRlX3VwZGF0ZVN0YXRpY0FycmF5SW5TdG9yYWdlUmVmOgoJdHhuIE9uQ29tcGxldGlvbgoJaW50IE5vT3AKCT09Cglhc3NlcnQKCWJ5dGUgMHgKCWR1cG4gMwoJY2FsbHN1YiB1cGRhdGVTdGF0aWNBcnJheUluU3RvcmFnZVJlZgoJaW50IDEKCXJldHVybgoKdXBkYXRlU3RhdGljQXJyYXlJblN0b3JhZ2VSZWY6Cglwcm90byAzIDAKCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjk1CgkvLyBhOiBTdGF0aWNBcnJheTx1aW50NjQsIDM+ID0gWzExLCAyMiwgMzNdCglieXRlIDB4MDAwMDAwMDAwMDAwMDAwYjAwMDAwMDAwMDAwMDAwMTYwMDAwMDAwMDAwMDAwMDIxCglmcmFtZV9idXJ5IC0xIC8vIGE6IHVpbnQ2NFszXQoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6OTcKCS8vIHRoaXMuZ1JlZi5wdXQoYSkKCWJ5dGUgImdSZWYiCglmcmFtZV9kaWcgLTEgLy8gYTogdWludDY0WzNdCglhcHBfZ2xvYmFsX3B1dAoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6OTgKCS8vIHRoaXMubFJlZi5wdXQodGhpcy50eG4uc2VuZGVyLCBhKQoJdHhuIFNlbmRlcgoJYnl0ZSAibFJlZiIKCWZyYW1lX2RpZyAtMSAvLyBhOiB1aW50NjRbM10KCWFwcF9sb2NhbF9wdXQKCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjk5CgkvLyB0aGlzLmJSZWYucHV0KGEpCglieXRlICJiUmVmIgoJZnJhbWVfZGlnIC0xIC8vIGE6IHVpbnQ2NFszXQoJYm94X3B1dAoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6MTAxCgkvLyB0aGlzLmdSZWYuZ2V0KClbMV0gPSAxMTEKCWJ5dGUgImdSZWYiCglhcHBfZ2xvYmFsX2dldAoJaW50IDggLy8gb2Zmc2V0IGNhbGN1bGF0ZWQgZnJvbSBsaXRlcmFsIGFjY2VzcyBhcmd1bWVudHMKCWludCAxMTEKCWl0b2IKCXJlcGxhY2UzCglieXRlICJnUmVmIgoJc3dhcAoJYXBwX2dsb2JhbF9wdXQKCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjEwMgoJLy8gdGhpcy5sUmVmLmdldCh0aGlzLnR4bi5zZW5kZXIpWzFdID0gMjIyCgl0eG4gU2VuZGVyCglieXRlICJsUmVmIgoJYXBwX2xvY2FsX2dldAoJaW50IDggLy8gb2Zmc2V0IGNhbGN1bGF0ZWQgZnJvbSBsaXRlcmFsIGFjY2VzcyBhcmd1bWVudHMKCWludCAyMjIKCWl0b2IKCXJlcGxhY2UzCgl0eG4gU2VuZGVyCglieXRlICJsUmVmIgoJdW5jb3ZlciAyCglhcHBfbG9jYWxfcHV0CgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czoxMDMKCS8vIHRoaXMuYlJlZi5nZXQoKVsxXSA9IDMzMwoJYnl0ZSAiYlJlZiIKCWJveF9nZXQKCWFzc2VydAoJaW50IDggLy8gb2Zmc2V0IGNhbGN1bGF0ZWQgZnJvbSBsaXRlcmFsIGFjY2VzcyBhcmd1bWVudHMKCWludCAzMzMKCWl0b2IKCXJlcGxhY2UzCglieXRlICJiUmVmIgoJc3dhcAoJYm94X3B1dAoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6MTA1CgkvLyByZXQ6IFN0YXRpY0FycmF5PHVpbnQ2NCwgMz4gPSBbCglieXRlICJnUmVmIgoJYXBwX2dsb2JhbF9nZXQKCWV4dHJhY3QgOCA4CglidG9pCglpdG9iCgl0eG4gU2VuZGVyCglieXRlICJsUmVmIgoJYXBwX2xvY2FsX2dldAoJZXh0cmFjdCA4IDgKCWJ0b2kKCWl0b2IKCWNvbmNhdAoJYnl0ZSAiYlJlZiIKCWJveF9nZXQKCWFzc2VydAoJZXh0cmFjdCA4IDgKCWJ0b2kKCWl0b2IKCWNvbmNhdAoJZnJhbWVfYnVyeSAtMiAvLyByZXQ6IHVpbnQ2NFszXQoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6MTExCgkvLyByZXR1cm4gcmV0OwoJZnJhbWVfZGlnIC0yIC8vIHJldDogdWludDY0WzNdCglieXRlIDB4MTUxZjdjNzUKCXN3YXAKCWNvbmNhdAoJbG9nCglyZXRzdWIKCmFiaV9yb3V0ZV9zdGF0aWNBcnJheUluU3RvcmFnZU1hcDoKCXR4biBPbkNvbXBsZXRpb24KCWludCBOb09wCgk9PQoJYXNzZXJ0CglieXRlIDB4CglkdXBuIDMKCWNhbGxzdWIgc3RhdGljQXJyYXlJblN0b3JhZ2VNYXAKCWludCAxCglyZXR1cm4KCnN0YXRpY0FycmF5SW5TdG9yYWdlTWFwOgoJcHJvdG8gMyAwCgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czoxMTUKCS8vIGE6IFN0YXRpY0FycmF5PHVpbnQ2NCwgMz4gPSBbMTEsIDIyLCAzM10KCWJ5dGUgMHgwMDAwMDAwMDAwMDAwMDBiMDAwMDAwMDAwMDAwMDAxNjAwMDAwMDAwMDAwMDAwMjEKCWZyYW1lX2J1cnkgLTEgLy8gYTogdWludDY0WzNdCgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czoxMTcKCS8vIHRoaXMuZ01hcC5wdXQoJ2dNYXAnLCBhKQoJYnl0ZSAiZ01hcCIKCWZyYW1lX2RpZyAtMSAvLyBhOiB1aW50NjRbM10KCWFwcF9nbG9iYWxfcHV0CgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czoxMTgKCS8vIHRoaXMubE1hcC5wdXQodGhpcy50eG4uc2VuZGVyLCAnbE1hcCcsIGEpCgl0eG4gU2VuZGVyCglieXRlICJsTWFwIgoJZnJhbWVfZGlnIC0xIC8vIGE6IHVpbnQ2NFszXQoJYXBwX2xvY2FsX3B1dAoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6MTE5CgkvLyB0aGlzLmJNYXAucHV0KCdiTWFwJywgYSkKCWJ5dGUgImJNYXAiCglmcmFtZV9kaWcgLTEgLy8gYTogdWludDY0WzNdCglib3hfcHV0CgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czoxMjEKCS8vIHJldDogU3RhdGljQXJyYXk8dWludDY0LCAzPiA9IFsKCWJ5dGUgImdNYXAiCglhcHBfZ2xvYmFsX2dldAoJZXh0cmFjdCA4IDgKCWJ0b2kKCWl0b2IKCXR4biBTZW5kZXIKCWJ5dGUgImxNYXAiCglhcHBfbG9jYWxfZ2V0CglleHRyYWN0IDggOAoJYnRvaQoJaXRvYgoJY29uY2F0CglieXRlICJiTWFwIgoJYm94X2dldAoJYXNzZXJ0CglleHRyYWN0IDggOAoJYnRvaQoJaXRvYgoJY29uY2F0CglmcmFtZV9idXJ5IC0yIC8vIHJldDogdWludDY0WzNdCgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czoxMjcKCS8vIHJldHVybiByZXQ7CglmcmFtZV9kaWcgLTIgLy8gcmV0OiB1aW50NjRbM10KCWJ5dGUgMHgxNTFmN2M3NQoJc3dhcAoJY29uY2F0Cglsb2cKCXJldHN1YgoKYWJpX3JvdXRlX3VwZGF0ZVN0YXRpY0FycmF5SW5TdG9yYWdlTWFwOgoJdHhuIE9uQ29tcGxldGlvbgoJaW50IE5vT3AKCT09Cglhc3NlcnQKCWJ5dGUgMHgKCWR1cG4gMwoJY2FsbHN1YiB1cGRhdGVTdGF0aWNBcnJheUluU3RvcmFnZU1hcAoJaW50IDEKCXJldHVybgoKdXBkYXRlU3RhdGljQXJyYXlJblN0b3JhZ2VNYXA6Cglwcm90byAzIDAKCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjEzMQoJLy8gYTogU3RhdGljQXJyYXk8dWludDY0LCAzPiA9IFsxMSwgMjIsIDMzXQoJYnl0ZSAweDAwMDAwMDAwMDAwMDAwMGIwMDAwMDAwMDAwMDAwMDE2MDAwMDAwMDAwMDAwMDAyMQoJZnJhbWVfYnVyeSAtMSAvLyBhOiB1aW50NjRbM10KCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjEzMwoJLy8gdGhpcy5nTWFwLnB1dCgnZ01hcCcsIGEpCglieXRlICJnTWFwIgoJZnJhbWVfZGlnIC0xIC8vIGE6IHVpbnQ2NFszXQoJYXBwX2dsb2JhbF9wdXQKCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjEzNAoJLy8gdGhpcy5sTWFwLnB1dCh0aGlzLnR4bi5zZW5kZXIsICdsTWFwJywgYSkKCXR4biBTZW5kZXIKCWJ5dGUgImxNYXAiCglmcmFtZV9kaWcgLTEgLy8gYTogdWludDY0WzNdCglhcHBfbG9jYWxfcHV0CgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czoxMzUKCS8vIHRoaXMuYk1hcC5wdXQoJ2JNYXAnLCBhKQoJYnl0ZSAiYk1hcCIKCWZyYW1lX2RpZyAtMSAvLyBhOiB1aW50NjRbM10KCWJveF9wdXQKCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjEzNwoJLy8gdGhpcy5nTWFwLmdldCgnZ01hcCcpWzFdID0gMTExMQoJYnl0ZSAiZ01hcCIKCWFwcF9nbG9iYWxfZ2V0CglpbnQgOCAvLyBvZmZzZXQgY2FsY3VsYXRlZCBmcm9tIGxpdGVyYWwgYWNjZXNzIGFyZ3VtZW50cwoJaW50IDExMTEKCWl0b2IKCXJlcGxhY2UzCglieXRlICJnTWFwIgoJc3dhcAoJYXBwX2dsb2JhbF9wdXQKCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjEzOAoJLy8gdGhpcy5sTWFwLmdldCh0aGlzLnR4bi5zZW5kZXIsICdsTWFwJylbMV0gPSAyMjIyCgl0eG4gU2VuZGVyCglieXRlICJsTWFwIgoJYXBwX2xvY2FsX2dldAoJaW50IDggLy8gb2Zmc2V0IGNhbGN1bGF0ZWQgZnJvbSBsaXRlcmFsIGFjY2VzcyBhcmd1bWVudHMKCWludCAyMjIyCglpdG9iCglyZXBsYWNlMwoJdHhuIFNlbmRlcgoJYnl0ZSAibE1hcCIKCXVuY292ZXIgMgoJYXBwX2xvY2FsX3B1dAoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6MTM5CgkvLyB0aGlzLmJNYXAuZ2V0KCdiTWFwJylbMV0gPSAzMzMzCglieXRlICJiTWFwIgoJYm94X2dldAoJYXNzZXJ0CglpbnQgOCAvLyBvZmZzZXQgY2FsY3VsYXRlZCBmcm9tIGxpdGVyYWwgYWNjZXNzIGFyZ3VtZW50cwoJaW50IDMzMzMKCWl0b2IKCXJlcGxhY2UzCglieXRlICJiTWFwIgoJc3dhcAoJYm94X3B1dAoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6MTQxCgkvLyByZXQ6IFN0YXRpY0FycmF5PHVpbnQ2NCwgMz4gPSBbCglieXRlICJnTWFwIgoJYXBwX2dsb2JhbF9nZXQKCWV4dHJhY3QgOCA4CglidG9pCglpdG9iCgl0eG4gU2VuZGVyCglieXRlICJsTWFwIgoJYXBwX2xvY2FsX2dldAoJZXh0cmFjdCA4IDgKCWJ0b2kKCWl0b2IKCWNvbmNhdAoJYnl0ZSAiYk1hcCIKCWJveF9nZXQKCWFzc2VydAoJZXh0cmFjdCA4IDgKCWJ0b2kKCWl0b2IKCWNvbmNhdAoJZnJhbWVfYnVyeSAtMiAvLyByZXQ6IHVpbnQ2NFszXQoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6MTQ3CgkvLyByZXR1cm4gcmV0OwoJZnJhbWVfZGlnIC0yIC8vIHJldDogdWludDY0WzNdCglieXRlIDB4MTUxZjdjNzUKCXN3YXAKCWNvbmNhdAoJbG9nCglyZXRzdWIKCmFiaV9yb3V0ZV9uZXN0ZWRTdGF0aWNBcnJheToKCXR4biBPbkNvbXBsZXRpb24KCWludCBOb09wCgk9PQoJYXNzZXJ0CglieXRlIDB4CglkdXBuIDIKCWNhbGxzdWIgbmVzdGVkU3RhdGljQXJyYXkKCWludCAxCglyZXR1cm4KCm5lc3RlZFN0YXRpY0FycmF5OgoJcHJvdG8gMiAwCgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czoxNTEKCS8vIGE6IFN0YXRpY0FycmF5PFN0YXRpY0FycmF5PHVpbnQ2NCwgMz4sIDM+ID0gW1sxMSwgMjIsIDMzXSwgWzQ0LCA1NSwgNjZdXQoJYnl0ZSAweDAwMDAwMDAwMDAwMDAwMGIwMDAwMDAwMDAwMDAwMDE2MDAwMDAwMDAwMDAwMDAyMQoJYnl0ZSAweDAwMDAwMDAwMDAwMDAwMmMwMDAwMDAwMDAwMDAwMDM3MDAwMDAwMDAwMDAwMDA0MgoJY29uY2F0CglmcmFtZV9idXJ5IC0xIC8vIGE6IHVpbnQ2NFszXVszXQoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6MTUzCgkvLyByZXR1cm4gYVsxXVsxXTsKCWZyYW1lX2RpZyAtMSAvLyBhOiB1aW50NjRbM11bM10KCWV4dHJhY3QgMjQgMjQKCWV4dHJhY3QgOCA4CglidG9pCglpdG9iCglieXRlIDB4MTUxZjdjNzUKCXN3YXAKCWNvbmNhdAoJbG9nCglyZXRzdWIKCmFiaV9yb3V0ZV91cGRhdGVOZXN0ZWRTdGF0aWNBcnJheUVsZW1lbnQ6Cgl0eG4gT25Db21wbGV0aW9uCglpbnQgTm9PcAoJPT0KCWFzc2VydAoJYnl0ZSAweAoJZHVwbiAyCgljYWxsc3ViIHVwZGF0ZU5lc3RlZFN0YXRpY0FycmF5RWxlbWVudAoJaW50IDEKCXJldHVybgoKdXBkYXRlTmVzdGVkU3RhdGljQXJyYXlFbGVtZW50OgoJcHJvdG8gMiAwCgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czoxNTcKCS8vIGE6IFN0YXRpY0FycmF5PFN0YXRpY0FycmF5PHVpbnQ2NCwgMz4sIDM+ID0gW1sxMSwgMjIsIDMzXSwgWzQ0LCA1NSwgNjZdXQoJYnl0ZSAweDAwMDAwMDAwMDAwMDAwMGIwMDAwMDAwMDAwMDAwMDE2MDAwMDAwMDAwMDAwMDAyMQoJYnl0ZSAweDAwMDAwMDAwMDAwMDAwMmMwMDAwMDAwMDAwMDAwMDM3MDAwMDAwMDAwMDAwMDA0MgoJY29uY2F0CglmcmFtZV9idXJ5IC0xIC8vIGE6IHVpbnQ2NFszXVszXQoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6MTU5CgkvLyBhWzFdWzFdID0gNTU1CglmcmFtZV9kaWcgLTEgLy8gYTogdWludDY0WzNdWzNdCglpbnQgMzIgLy8gb2Zmc2V0IGNhbGN1bGF0ZWQgZnJvbSBsaXRlcmFsIGFjY2VzcyBhcmd1bWVudHMKCWludCA1NTUKCWl0b2IKCXJlcGxhY2UzCglmcmFtZV9idXJ5IC0xIC8vIGE6IHVpbnQ2NFszXQoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6MTYxCgkvLyByZXR1cm4gYVsxXVsxXTsKCWZyYW1lX2RpZyAtMSAvLyBhOiB1aW50NjRbM11bM10KCWV4dHJhY3QgMjQgMjQKCWV4dHJhY3QgOCA4CglidG9pCglpdG9iCglieXRlIDB4MTUxZjdjNzUKCXN3YXAKCWNvbmNhdAoJbG9nCglyZXRzdWIKCmFiaV9yb3V0ZV91cGRhdGVOZXN0ZWRTdGF0aWNBcnJheToKCXR4biBPbkNvbXBsZXRpb24KCWludCBOb09wCgk9PQoJYXNzZXJ0CglieXRlIDB4CglkdXBuIDIKCWNhbGxzdWIgdXBkYXRlTmVzdGVkU3RhdGljQXJyYXkKCWludCAxCglyZXR1cm4KCnVwZGF0ZU5lc3RlZFN0YXRpY0FycmF5OgoJcHJvdG8gMiAwCgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czoxNjUKCS8vIGE6IFN0YXRpY0FycmF5PFN0YXRpY0FycmF5PHVpbnQ2NCwgMz4sIDM+ID0gW1sxMSwgMjIsIDMzXSwgWzQ0LCA1NSwgNjZdXQoJYnl0ZSAweDAwMDAwMDAwMDAwMDAwMGIwMDAwMDAwMDAwMDAwMDE2MDAwMDAwMDAwMDAwMDAyMQoJYnl0ZSAweDAwMDAwMDAwMDAwMDAwMmMwMDAwMDAwMDAwMDAwMDM3MDAwMDAwMDAwMDAwMDA0MgoJY29uY2F0CglmcmFtZV9idXJ5IC0xIC8vIGE6IHVpbnQ2NFszXVszXQoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6MTY3CgkvLyBhWzFdID0gWzQ0NCwgNTU1LCA2NjZdCglmcmFtZV9kaWcgLTEgLy8gYTogdWludDY0WzNdWzNdCglpbnQgMjQgLy8gb2Zmc2V0IGNhbGN1bGF0ZWQgZnJvbSBsaXRlcmFsIGFjY2VzcyBhcmd1bWVudHMKCWJ5dGUgMHgwMDAwMDAwMDAwMDAwMWJjMDAwMDAwMDAwMDAwMDIyYjAwMDAwMDAwMDAwMDAyOWEKCXJlcGxhY2UzCglmcmFtZV9idXJ5IC0xIC8vIGE6IHVpbnQ2NFszXQoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6MTY5CgkvLyByZXR1cm4gYVsxXVsxXTsKCWZyYW1lX2RpZyAtMSAvLyBhOiB1aW50NjRbM11bM10KCWV4dHJhY3QgMjQgMjQKCWV4dHJhY3QgOCA4CglidG9pCglpdG9iCglieXRlIDB4MTUxZjdjNzUKCXN3YXAKCWNvbmNhdAoJbG9nCglyZXRzdWIKCmFiaV9yb3V0ZV90aHJlZURpbWVuc2lvbmFsVWludDE2QXJyYXk6Cgl0eG4gT25Db21wbGV0aW9uCglpbnQgTm9PcAoJPT0KCWFzc2VydAoJYnl0ZSAweAoJZHVwbiAyCgljYWxsc3ViIHRocmVlRGltZW5zaW9uYWxVaW50MTZBcnJheQoJaW50IDEKCXJldHVybgoKdGhyZWVEaW1lbnNpb25hbFVpbnQxNkFycmF5OgoJcHJvdG8gMiAwCgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czoxNzMKCS8vIGE6IFN0YXRpY0FycmF5PFN0YXRpY0FycmF5PFN0YXRpY0FycmF5PHVpbnQxNiwgMj4sIDI+LCAyPiA9IFsKCWJ5dGUgMHgwMDBiMDAxNgoJYnl0ZSAweDAwMjEwMDJjCgljb25jYXQKCWJ5dGUgMHgwMDM3MDA0MgoJYnl0ZSAweDAwNGQwMDU4Cgljb25jYXQKCWNvbmNhdAoJZnJhbWVfYnVyeSAtMSAvLyBhOiB1aW50MTZbMl1bMl1bMl0KCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjE3NwoJLy8gYVsxXVsxXSA9IFs3NzcsIDg4OF0KCWZyYW1lX2RpZyAtMSAvLyBhOiB1aW50MTZbMl1bMl1bMl0KCWludCAxMiAvLyBvZmZzZXQgY2FsY3VsYXRlZCBmcm9tIGxpdGVyYWwgYWNjZXNzIGFyZ3VtZW50cwoJYnl0ZSAweDAzMDkwMzc4CglyZXBsYWNlMwoJZnJhbWVfYnVyeSAtMSAvLyBhOiB1aW50MTZbMl1bMl0KCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjE3OQoJLy8gcmV0dXJuIGFbMV1bMV1bMV07CglmcmFtZV9kaWcgLTEgLy8gYTogdWludDE2WzJdWzJdWzJdCglleHRyYWN0IDggOAoJZXh0cmFjdCA0IDQKCWV4dHJhY3QgMiAyCglieXRlIDB4RkZGRgoJYiYKCWJ5dGUgMHgxNTFmN2M3NQoJc3dhcAoJY29uY2F0Cglsb2cKCXJldHN1YgoKYWJpX3JvdXRlX3NpbXBsZVR1cGxlOgoJdHhuIE9uQ29tcGxldGlvbgoJaW50IE5vT3AKCT09Cglhc3NlcnQKCWJ5dGUgMHgKCWR1cG4gMgoJY2FsbHN1YiBzaW1wbGVUdXBsZQoJaW50IDEKCXJldHVybgoKc2ltcGxlVHVwbGU6Cglwcm90byAyIDAKCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjE4MwoJLy8gYTogW3VpbnQ2NCwgdWludDE2LCB1aW50NjQsIHVpbnQxNl0gPSBbMTEsIDIyLCAzMywgNDRdCglieXRlIDB4MDAwMDAwMDAwMDAwMDAwYjAwMTYwMDAwMDAwMDAwMDAwMDIxMDAyYwoJZnJhbWVfYnVyeSAtMSAvLyBhOiBbdWludDY0LCB1aW50MTYsIHVpbnQ2NCwgdWludDE2XQoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6MTg1CgkvLyByZXR1cm4gYVszXTsKCWZyYW1lX2RpZyAtMSAvLyBhOiBbdWludDY0LCB1aW50MTYsIHVpbnQ2NCwgdWludDE2XQoJZXh0cmFjdCAxOCAyCglieXRlIDB4RkZGRgoJYiYKCWJ5dGUgMHgxNTFmN2M3NQoJc3dhcAoJY29uY2F0Cglsb2cKCXJldHN1YgoKYWJpX3JvdXRlX2FycmF5SW5UdXBsZToKCXR4biBPbkNvbXBsZXRpb24KCWludCBOb09wCgk9PQoJYXNzZXJ0CglieXRlIDB4CglkdXBuIDIKCWNhbGxzdWIgYXJyYXlJblR1cGxlCglpbnQgMQoJcmV0dXJuCgphcnJheUluVHVwbGU6Cglwcm90byAyIDAKCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjE4OQoJLy8gYTogW3VpbnQ2NCwgdWludDE2LCBTdGF0aWNBcnJheTx1aW50NjQsIDI+LCB1aW50MTZdID0gWwoJYnl0ZSAweDAwMDAwMDAwMDAwMDAwMGIwMDE2CglieXRlIDB4MDAwMDAwMDAwMDAwMDAyMTAwMDAwMDAwMDAwMDAwMmMKCWNvbmNhdAoJYnl0ZSAweDAwMzcKCWNvbmNhdAoJZnJhbWVfYnVyeSAtMSAvLyBhOiBbdWludDY0LCB1aW50MTYsIHN0YXRpY2FycmF5PHVpbnQ2NCwgMj4sIHVpbnQxNl0KCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjE5MwoJLy8gcmV0dXJuIGFbMl1bMV07CglmcmFtZV9kaWcgLTEgLy8gYTogW3VpbnQ2NCwgdWludDE2LCBzdGF0aWNhcnJheTx1aW50NjQsIDI+LCB1aW50MTZdCglleHRyYWN0IDEwIDE2CglleHRyYWN0IDggOAoJYnRvaQoJaXRvYgoJYnl0ZSAweDE1MWY3Yzc1Cglzd2FwCgljb25jYXQKCWxvZwoJcmV0c3ViCgphYmlfcm91dGVfdHVwbGVJbkFycmF5OgoJdHhuIE9uQ29tcGxldGlvbgoJaW50IE5vT3AKCT09Cglhc3NlcnQKCWJ5dGUgMHgKCWR1cG4gMgoJY2FsbHN1YiB0dXBsZUluQXJyYXkKCWludCAxCglyZXR1cm4KCnR1cGxlSW5BcnJheToKCXByb3RvIDIgMAoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6MTk3CgkvLyBhOiBTdGF0aWNBcnJheTxbdWludDY0LCB1aW50MTZdLCAyPiA9IFsKCWJ5dGUgMHgwMDAwMDAwMDAwMDAwMDBiMDAwMDAwMDAwMDAwMDAxNgoJYnl0ZSAweDAwMjEwMDJjCgljb25jYXQKCWZyYW1lX2J1cnkgLTEgLy8gYTogW3VpbnQ2NCwgdWludDE2XVsyXQoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6MjAxCgkvLyByZXR1cm4gYVsxXVsxXTsKCWZyYW1lX2RpZyAtMSAvLyBhOiBbdWludDY0LCB1aW50MTZdWzJdCglleHRyYWN0IDEwIDEwCglleHRyYWN0IDggMgoJYnl0ZSAweEZGRkYKCWImCglieXRlIDB4MTUxZjdjNzUKCXN3YXAKCWNvbmNhdAoJbG9nCglyZXRzdWIKCmFiaV9yb3V0ZV90dXBsZUluVHVwbGU6Cgl0eG4gT25Db21wbGV0aW9uCglpbnQgTm9PcAoJPT0KCWFzc2VydAoJYnl0ZSAweAoJZHVwbiAyCgljYWxsc3ViIHR1cGxlSW5UdXBsZQoJaW50IDEKCXJldHVybgoKdHVwbGVJblR1cGxlOgoJcHJvdG8gMiAwCgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czoyMDUKCS8vIGE6IFt1aW50MTYsIHVpbnQxNiwgW3VpbnQ2NCwgdWludDE2XSwgW3VpbnQxNiwgdWludDY0XV0gPSBbCglieXRlIDB4MDAwYjAwMTYKCWJ5dGUgMHgwMDAwMDAwMDAwMDAwMDIxMDAyYwoJY29uY2F0CglieXRlIDB4MDAzNzAwMDAwMDAwMDAwMDAwNDIKCWNvbmNhdAoJZnJhbWVfYnVyeSAtMSAvLyBhOiBbdWludDE2LCB1aW50MTYsIFt1aW50NjQsIHVpbnQxNl0sIFt1aW50MTYsIHVpbnQ2NF1dCgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czoyMDkKCS8vIHJldHVybiBhWzNdWzFdOwoJZnJhbWVfZGlnIC0xIC8vIGE6IFt1aW50MTYsIHVpbnQxNiwgW3VpbnQ2NCwgdWludDE2XSwgW3VpbnQxNiwgdWludDY0XV0KCWV4dHJhY3QgMTQgMTAKCWV4dHJhY3QgMiA4CglidG9pCglpdG9iCglieXRlIDB4MTUxZjdjNzUKCXN3YXAKCWNvbmNhdAoJbG9nCglyZXRzdWIKCmFiaV9yb3V0ZV9zaG9ydFR5cGVOb3RhdGlvbjoKCXR4biBPbkNvbXBsZXRpb24KCWludCBOb09wCgk9PQoJYXNzZXJ0CglieXRlIDB4CglkdXBuIDIKCWNhbGxzdWIgc2hvcnRUeXBlTm90YXRpb24KCWludCAxCglyZXR1cm4KCnNob3J0VHlwZU5vdGF0aW9uOgoJcHJvdG8gMiAwCgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czoyMTMKCS8vIGE6IFt1aW50MTY8Mj4sIHVpbnQ2NDwyPiwgdWludDE2PDI+XSA9IFsKCWJ5dGUgMHgwMDBiMDAxNgoJYnl0ZSAweDAwMDAwMDAwMDAwMDAwMjEwMDAwMDAwMDAwMDAwMDJjCgljb25jYXQKCWJ5dGUgMHgwMDM3MDA0MgoJY29uY2F0CglmcmFtZV9idXJ5IC0xIC8vIGE6IFt1aW50MTY8Mj4sIHVpbnQ2NDwyPiwgdWludDE2PDI+XQoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6MjE3CgkvLyByZXR1cm4gYVsyXVsxXTsKCWZyYW1lX2RpZyAtMSAvLyBhOiBbdWludDE2PDI+LCB1aW50NjQ8Mj4sIHVpbnQxNjwyPl0KCWV4dHJhY3QgMjAgNAoJZXh0cmFjdCAyIDIKCWJ5dGUgMHhGRkZGCgliJgoJYnl0ZSAweDE1MWY3Yzc1Cglzd2FwCgljb25jYXQKCWxvZwoJcmV0c3ViCgptYWluOgoJdHhuIE51bUFwcEFyZ3MKCWJueiByb3V0ZV9hYmkKCXR4biBBcHBsaWNhdGlvbklECglpbnQgMAoJPT0KCWludCBPcHRJbgoJdHhuIE9uQ29tcGxldGlvbgoJPT0KCXR4biBBcHBsaWNhdGlvbklECglpbnQgMAoJIT0KCSYmCglpbnQgMQoJbWF0Y2ggYmFyZV9yb3V0ZV9jcmVhdGUgYmFyZV9yb3V0ZV9vcHRJbgoKcm91dGVfYWJpOgoJbWV0aG9kICJzdGF0aWNBcnJheSgpdWludDY0IgoJbWV0aG9kICJyZXR1cm5TdGF0aWNBcnJheSgpdWludDY0WzNdIgoJbWV0aG9kICJzdGF0aWNBcnJheUFyZyh1aW50NjRbM10pdWludDY0IgoJbWV0aG9kICJub25MaXRlcmFsU3RhdGljQXJyYXlFbGVtZW50cygpdWludDY0IgoJbWV0aG9kICJtaXhlZFN0YXRpY0FycmF5RWxlbWVudHMoKXVpbnQ2NCIKCW1ldGhvZCAibm9uTGl0ZXJhbFN0YXRpY0FycmF5QWNjZXNzKCl1aW50NjQiCgltZXRob2QgInNldFN0YXRpY0FycmF5RWxlbWVudCgpdWludDY0IgoJbWV0aG9kICJzdGF0aWNBcnJheUluU3RvcmFnZVJlZigpdWludDY0WzNdIgoJbWV0aG9kICJ1cGRhdGVTdGF0aWNBcnJheUluU3RvcmFnZVJlZigpdWludDY0WzNdIgoJbWV0aG9kICJzdGF0aWNBcnJheUluU3RvcmFnZU1hcCgpdWludDY0WzNdIgoJbWV0aG9kICJ1cGRhdGVTdGF0aWNBcnJheUluU3RvcmFnZU1hcCgpdWludDY0WzNdIgoJbWV0aG9kICJuZXN0ZWRTdGF0aWNBcnJheSgpdWludDY0IgoJbWV0aG9kICJ1cGRhdGVOZXN0ZWRTdGF0aWNBcnJheUVsZW1lbnQoKXVpbnQ2NCIKCW1ldGhvZCAidXBkYXRlTmVzdGVkU3RhdGljQXJyYXkoKXVpbnQ2NCIKCW1ldGhvZCAidGhyZWVEaW1lbnNpb25hbFVpbnQxNkFycmF5KCl1aW50MTYiCgltZXRob2QgInNpbXBsZVR1cGxlKCl1aW50MTYiCgltZXRob2QgImFycmF5SW5UdXBsZSgpdWludDY0IgoJbWV0aG9kICJ0dXBsZUluQXJyYXkoKXVpbnQxNiIKCW1ldGhvZCAidHVwbGVJblR1cGxlKCl1aW50NjQiCgltZXRob2QgInNob3J0VHlwZU5vdGF0aW9uKCl1aW50MTYiCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAwCgltYXRjaCBhYmlfcm91dGVfc3RhdGljQXJyYXkgYWJpX3JvdXRlX3JldHVyblN0YXRpY0FycmF5IGFiaV9yb3V0ZV9zdGF0aWNBcnJheUFyZyBhYmlfcm91dGVfbm9uTGl0ZXJhbFN0YXRpY0FycmF5RWxlbWVudHMgYWJpX3JvdXRlX21peGVkU3RhdGljQXJyYXlFbGVtZW50cyBhYmlfcm91dGVfbm9uTGl0ZXJhbFN0YXRpY0FycmF5QWNjZXNzIGFiaV9yb3V0ZV9zZXRTdGF0aWNBcnJheUVsZW1lbnQgYWJpX3JvdXRlX3N0YXRpY0FycmF5SW5TdG9yYWdlUmVmIGFiaV9yb3V0ZV91cGRhdGVTdGF0aWNBcnJheUluU3RvcmFnZVJlZiBhYmlfcm91dGVfc3RhdGljQXJyYXlJblN0b3JhZ2VNYXAgYWJpX3JvdXRlX3VwZGF0ZVN0YXRpY0FycmF5SW5TdG9yYWdlTWFwIGFiaV9yb3V0ZV9uZXN0ZWRTdGF0aWNBcnJheSBhYmlfcm91dGVfdXBkYXRlTmVzdGVkU3RhdGljQXJyYXlFbGVtZW50IGFiaV9yb3V0ZV91cGRhdGVOZXN0ZWRTdGF0aWNBcnJheSBhYmlfcm91dGVfdGhyZWVEaW1lbnNpb25hbFVpbnQxNkFycmF5IGFiaV9yb3V0ZV9zaW1wbGVUdXBsZSBhYmlfcm91dGVfYXJyYXlJblR1cGxlIGFiaV9yb3V0ZV90dXBsZUluQXJyYXkgYWJpX3JvdXRlX3R1cGxlSW5UdXBsZSBhYmlfcm91dGVfc2hvcnRUeXBlTm90YXRpb24=";
    override clearProgram: string = "I3ByYWdtYSB2ZXJzaW9uIDgKaW50IDEKcmV0dXJu";
    override methods: algosdk.ABIMethod[] = [
        new algosdk.ABIMethod({ name: "staticArray", desc: "", args: [], returns: { type: "uint64", desc: "" } }),
        new algosdk.ABIMethod({ name: "returnStaticArray", desc: "", args: [], returns: { type: "uint64[3]", desc: "" } }),
        new algosdk.ABIMethod({ name: "staticArrayArg", desc: "", args: [{ type: "uint64[3]", name: "a", desc: "" }], returns: { type: "uint64", desc: "" } }),
        new algosdk.ABIMethod({ name: "nonLiteralStaticArrayElements", desc: "", args: [], returns: { type: "uint64", desc: "" } }),
        new algosdk.ABIMethod({ name: "mixedStaticArrayElements", desc: "", args: [], returns: { type: "uint64", desc: "" } }),
        new algosdk.ABIMethod({ name: "nonLiteralStaticArrayAccess", desc: "", args: [], returns: { type: "uint64", desc: "" } }),
        new algosdk.ABIMethod({ name: "setStaticArrayElement", desc: "", args: [], returns: { type: "uint64", desc: "" } }),
        new algosdk.ABIMethod({ name: "staticArrayInStorageRef", desc: "", args: [], returns: { type: "uint64[3]", desc: "" } }),
        new algosdk.ABIMethod({ name: "updateStaticArrayInStorageRef", desc: "", args: [], returns: { type: "uint64[3]", desc: "" } }),
        new algosdk.ABIMethod({ name: "staticArrayInStorageMap", desc: "", args: [], returns: { type: "uint64[3]", desc: "" } }),
        new algosdk.ABIMethod({ name: "updateStaticArrayInStorageMap", desc: "", args: [], returns: { type: "uint64[3]", desc: "" } }),
        new algosdk.ABIMethod({ name: "nestedStaticArray", desc: "", args: [], returns: { type: "uint64", desc: "" } }),
        new algosdk.ABIMethod({ name: "updateNestedStaticArrayElement", desc: "", args: [], returns: { type: "uint64", desc: "" } }),
        new algosdk.ABIMethod({ name: "updateNestedStaticArray", desc: "", args: [], returns: { type: "uint64", desc: "" } }),
        new algosdk.ABIMethod({ name: "threeDimensionalUint16Array", desc: "", args: [], returns: { type: "uint16", desc: "" } }),
        new algosdk.ABIMethod({ name: "simpleTuple", desc: "", args: [], returns: { type: "uint16", desc: "" } }),
        new algosdk.ABIMethod({ name: "arrayInTuple", desc: "", args: [], returns: { type: "uint64", desc: "" } }),
        new algosdk.ABIMethod({ name: "tupleInArray", desc: "", args: [], returns: { type: "uint16", desc: "" } }),
        new algosdk.ABIMethod({ name: "tupleInTuple", desc: "", args: [], returns: { type: "uint64", desc: "" } }),
        new algosdk.ABIMethod({ name: "shortTypeNotation", desc: "", args: [], returns: { type: "uint16", desc: "" } })
    ];
    async staticArray(txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<bigint>> {
        const result = await this.execute(await this.compose.staticArray(txnParams));
        return new bkr.ABIResult<bigint>(result, result.returnValue as bigint);
    }
    async returnStaticArray(txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<bigint[]>> {
        const result = await this.execute(await this.compose.returnStaticArray(txnParams));
        return new bkr.ABIResult<bigint[]>(result, result.returnValue as bigint[]);
    }
    async staticArrayArg(args: {
        a: bigint[];
    }, txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<bigint>> {
        const result = await this.execute(await this.compose.staticArrayArg({ a: args.a }, txnParams));
        return new bkr.ABIResult<bigint>(result, result.returnValue as bigint);
    }
    async nonLiteralStaticArrayElements(txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<bigint>> {
        const result = await this.execute(await this.compose.nonLiteralStaticArrayElements(txnParams));
        return new bkr.ABIResult<bigint>(result, result.returnValue as bigint);
    }
    async mixedStaticArrayElements(txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<bigint>> {
        const result = await this.execute(await this.compose.mixedStaticArrayElements(txnParams));
        return new bkr.ABIResult<bigint>(result, result.returnValue as bigint);
    }
    async nonLiteralStaticArrayAccess(txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<bigint>> {
        const result = await this.execute(await this.compose.nonLiteralStaticArrayAccess(txnParams));
        return new bkr.ABIResult<bigint>(result, result.returnValue as bigint);
    }
    async setStaticArrayElement(txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<bigint>> {
        const result = await this.execute(await this.compose.setStaticArrayElement(txnParams));
        return new bkr.ABIResult<bigint>(result, result.returnValue as bigint);
    }
    async staticArrayInStorageRef(txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<bigint[]>> {
        const result = await this.execute(await this.compose.staticArrayInStorageRef(txnParams));
        return new bkr.ABIResult<bigint[]>(result, result.returnValue as bigint[]);
    }
    async updateStaticArrayInStorageRef(txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<bigint[]>> {
        const result = await this.execute(await this.compose.updateStaticArrayInStorageRef(txnParams));
        return new bkr.ABIResult<bigint[]>(result, result.returnValue as bigint[]);
    }
    async staticArrayInStorageMap(txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<bigint[]>> {
        const result = await this.execute(await this.compose.staticArrayInStorageMap(txnParams));
        return new bkr.ABIResult<bigint[]>(result, result.returnValue as bigint[]);
    }
    async updateStaticArrayInStorageMap(txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<bigint[]>> {
        const result = await this.execute(await this.compose.updateStaticArrayInStorageMap(txnParams));
        return new bkr.ABIResult<bigint[]>(result, result.returnValue as bigint[]);
    }
    async nestedStaticArray(txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<bigint>> {
        const result = await this.execute(await this.compose.nestedStaticArray(txnParams));
        return new bkr.ABIResult<bigint>(result, result.returnValue as bigint);
    }
    async updateNestedStaticArrayElement(txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<bigint>> {
        const result = await this.execute(await this.compose.updateNestedStaticArrayElement(txnParams));
        return new bkr.ABIResult<bigint>(result, result.returnValue as bigint);
    }
    async updateNestedStaticArray(txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<bigint>> {
        const result = await this.execute(await this.compose.updateNestedStaticArray(txnParams));
        return new bkr.ABIResult<bigint>(result, result.returnValue as bigint);
    }
    async threeDimensionalUint16Array(txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<bigint>> {
        const result = await this.execute(await this.compose.threeDimensionalUint16Array(txnParams));
        return new bkr.ABIResult<bigint>(result, result.returnValue as bigint);
    }
    async simpleTuple(txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<bigint>> {
        const result = await this.execute(await this.compose.simpleTuple(txnParams));
        return new bkr.ABIResult<bigint>(result, result.returnValue as bigint);
    }
    async arrayInTuple(txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<bigint>> {
        const result = await this.execute(await this.compose.arrayInTuple(txnParams));
        return new bkr.ABIResult<bigint>(result, result.returnValue as bigint);
    }
    async tupleInArray(txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<bigint>> {
        const result = await this.execute(await this.compose.tupleInArray(txnParams));
        return new bkr.ABIResult<bigint>(result, result.returnValue as bigint);
    }
    async tupleInTuple(txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<bigint>> {
        const result = await this.execute(await this.compose.tupleInTuple(txnParams));
        return new bkr.ABIResult<bigint>(result, result.returnValue as bigint);
    }
    async shortTypeNotation(txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<bigint>> {
        const result = await this.execute(await this.compose.shortTypeNotation(txnParams));
        return new bkr.ABIResult<bigint>(result, result.returnValue as bigint);
    }
    compose = {
        staticArray: async (txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "staticArray"), {}, txnParams, atc);
        },
        returnStaticArray: async (txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "returnStaticArray"), {}, txnParams, atc);
        },
        staticArrayArg: async (args: {
            a: bigint[];
        }, txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "staticArrayArg"), { a: args.a }, txnParams, atc);
        },
        nonLiteralStaticArrayElements: async (txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "nonLiteralStaticArrayElements"), {}, txnParams, atc);
        },
        mixedStaticArrayElements: async (txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "mixedStaticArrayElements"), {}, txnParams, atc);
        },
        nonLiteralStaticArrayAccess: async (txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "nonLiteralStaticArrayAccess"), {}, txnParams, atc);
        },
        setStaticArrayElement: async (txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "setStaticArrayElement"), {}, txnParams, atc);
        },
        staticArrayInStorageRef: async (txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "staticArrayInStorageRef"), {}, txnParams, atc);
        },
        updateStaticArrayInStorageRef: async (txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "updateStaticArrayInStorageRef"), {}, txnParams, atc);
        },
        staticArrayInStorageMap: async (txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "staticArrayInStorageMap"), {}, txnParams, atc);
        },
        updateStaticArrayInStorageMap: async (txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "updateStaticArrayInStorageMap"), {}, txnParams, atc);
        },
        nestedStaticArray: async (txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "nestedStaticArray"), {}, txnParams, atc);
        },
        updateNestedStaticArrayElement: async (txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "updateNestedStaticArrayElement"), {}, txnParams, atc);
        },
        updateNestedStaticArray: async (txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "updateNestedStaticArray"), {}, txnParams, atc);
        },
        threeDimensionalUint16Array: async (txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "threeDimensionalUint16Array"), {}, txnParams, atc);
        },
        simpleTuple: async (txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "simpleTuple"), {}, txnParams, atc);
        },
        arrayInTuple: async (txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "arrayInTuple"), {}, txnParams, atc);
        },
        tupleInArray: async (txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "tupleInArray"), {}, txnParams, atc);
        },
        tupleInTuple: async (txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "tupleInTuple"), {}, txnParams, atc);
        },
        shortTypeNotation: async (txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "shortTypeNotation"), {}, txnParams, atc);
        }
    };
}
