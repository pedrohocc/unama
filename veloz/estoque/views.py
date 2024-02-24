import base64
from django.shortcuts import get_object_or_404, render
from estoque.models import Produto, Estoque
from io import BytesIO
import qrcode
import barcode

def index(request):
    estoques = Estoque.objects.all()
    estoque_qr_code = []
    for item in estoques:
        encoded_qr_code = url_to_qr_code(f"http://127.0.0.1:8000/produto/{item.produto.id}")
        bar_code = url_to_barcode(f"http://127.0.0.1:8000/produto/{item.produto.id}")
        estoque_qr_code.append((item, encoded_qr_code, bar_code))
        
    return render(request, 'estoque/index.html', {'estoque': estoque_qr_code})

def produto(request, id_produto):
    produto = get_object_or_404(Produto, id=id_produto)
    return render(request, 'estoque/produto.html', {'produto': produto})

def url_to_barcode(data):
    code_type = 'code128'
    url = data
    barcode_class = barcode.get_barcode_class(code_type)
    bar_code = barcode_class(url, writer=barcode.writer.ImageWriter())
    buffer = BytesIO()
    bar_code.write(buffer)
    barcode_image = buffer.getvalue()
    buffer.close()
    encoded_barcode = "data:image/png;base64," + base64.b64encode(barcode_image).decode("utf-8")
    return encoded_barcode
    
def url_to_qr_code(data):
    qr = qrcode.QRCode(
            version=1,
            error_correction=qrcode.constants.ERROR_CORRECT_L,
            box_size=10,
            border=4,
        )
    qr.add_data(data)
    img = qr.make_image(fill_color="black", back_color="white")
    buffer = BytesIO()
    img.save(buffer, format="PNG")
    qr_code_image = buffer.getvalue()
    buffer.close()
    encoded_qr_code = "data:image/png;base64," + base64.b64encode(qr_code_image).decode("utf-8")
    return encoded_qr_code