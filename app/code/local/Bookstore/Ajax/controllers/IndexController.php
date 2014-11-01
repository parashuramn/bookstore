<?php
/**
 * User: Mr Khoa
 * Date: 02/11/2014
 * Time: 2:13 AM
 */
require_once ('Mage/Catalog/controllers/ProductController.php');
class Bookstore_Ajax_IndexController extends Mage_Catalog_ProductController
{
    public function quickViewAction() {

        $productId = $this->getRequest()->getParam('id');
        // Prepare helper and params
        $viewHelper = Mage::helper('catalog/product_view');

        $params = new Varien_Object();
        $params->setCategoryId(false);
        $params->setSpecifyOptions(false);

        // Render page
        try {
            $viewHelper->prepareAndRender($productId, $this, $params);
        } catch (Exception $e) {
            if ($e->getCode() == $viewHelper->ERR_NO_PRODUCT_LOADED) {
                if (isset($_GET['store'])  && !$this->getResponse()->isRedirect()) {
                    $this->_redirect('');
                } elseif (!$this->getResponse()->isRedirect()) {
                    $this->_forward('noRoute');
                }
            } else {
                Mage::logException($e);
                $this->_forward('noRoute');
            }
        }
    }
}