<template>
  <section class="mx-auto px-4 md:px-10 lg:px pb-12 max-w-[1363px] items-center">
    <h2 class="text-[28px] mb-16 font-medium">Formula de la excelencia</h2>
    <nav class="w-full flex justify-center gap-8 mb-11 text-base font-normal">
      <div :class="{'active': ShowRD}">
        <button @click="showRDTables">República Dominicana</button>
      </div>
      <div :class="{'active': ShowUS}">
        <button @click="showUSTables">Estados Unidos</button>
      </div>
    </nav>
    <!-- REP DOM TABLES -->
    <div v-show="ShowRD" class="flex flex-col gap-7">
      <!-- Table 3+3 -->
      <div>
        <button :class="{'rounded-b-lg': !tables.tableRD1}" @click="toggleTable('tableRD1')" class="formula-btn">Formula
          3+3
          <AtomsIcon v-show="!tables.tableRD1" name="arrow-down" :size=20 />
          <AtomsIcon v-show="tables.tableRD1" name="arrow-up" :size=20 />
        </button>
        <div v-if="tables.tableRD1" class="table-container">
          <p>Este plan esta basado en que tu familia sea formada por tres (3) personas y que cada uno de ellos a su vez
            la formen de solo tres (3) personas en el primer año.</p>
          <div class="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Generación</th>
                  <th>Afilia</th>
                  <th>Costo</th>
                  <th>Valor</th>
                  <th>% Comisión</th>
                  <th>Comisión</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hijos</td>
                  <td>3</td>
                  <td>10,000.00</td>
                  <td>30,000.00</td>
                  <td>40%</td>
                  <td>12,000.00</td>
                </tr>
                <tr>
                  <td>Nietos</td>
                  <td>9</td>
                  <td>10,000.00</td>
                  <td>90,000.00</td>
                  <td>10%</td>
                  <td>9,000.00</td>
                </tr>
                <tr>
                  <td>Bisnietos</td>
                  <td>27</td>
                  <td>10,000.00</td>
                  <td>270,000.00</td>
                  <td>7%</td>
                  <td>18,900.00</td>
                </tr>
                <tr>
                  <td>Tataranietos</td>
                  <td>81</td>
                  <td>10,000.00</td>
                  <td>810,000.00</td>
                  <td>5%</td>
                  <td>40,500.00</td>
                </tr>
                <tr>
                  <td>Trastataranietos</td>
                  <td>243</td>
                  <td>10,000.00</td>
                  <td>2,430,000.00</td>
                  <td>3%</td>
                  <td>72,900.00</td>
                </tr>
                <tr>
                  <td>Choznos</td>
                  <td>729</td>
                  <td>10,000.00</td>
                  <td>7,290,000.00</td>
                  <td>2%</td>
                  <td>145,800.00</td>
                </tr>
                <tr>
                  <td>Bichoznos</td>
                  <td>2187</td>
                  <td>10,000.00</td>
                  <td>21,870,000.00</td>
                  <td>1%</td>
                  <td>218,700.00</td>
                </tr>
                <tr>
                  <td colspan="5"></td>
                  <td>517,800.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- Table 5+3-->
      <div>
        <button :class="{'rounded-b-lg': !tables.tableRD2}" @click="toggleTable('tableRD2')" class="formula-btn">Formula
          5+3
          <AtomsIcon v-show="!tables.tableRD2" name="arrow-down" :size=20 />
          <AtomsIcon v-show="tables.tableRD2" name="arrow-up" :size=20 />
        </button>
        <div v-if="tables.tableRD2" class="table-container">
          <p>Este plan esta basado en que tu familia sea formada por cinco (5) personas y que cada uno de ellos a su vez
            la formen de solo tres (3) personas en el primer año.</p>
          <div class="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Generación</th>
                  <th>Afilia</th>
                  <th>Costo</th>
                  <th>Valor</th>
                  <th>% Comisión</th>
                  <th>Comisión</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hijos</td>
                  <td>5</td>
                  <td>10,000.00</td>
                  <td>50,000.00</td>
                  <td>40%</td>
                  <td>20,000.00</td>
                </tr>
                <tr>
                  <td>Nietos</td>
                  <td>15</td>
                  <td>10,000.00</td>
                  <td>150,000.00</td>
                  <td>10%</td>
                  <td>15,000.00</td>
                </tr>
                <tr>
                  <td>Bisnietos</td>
                  <td>45</td>
                  <td>10,000.00</td>
                  <td>450,000.00</td>
                  <td>7%</td>
                  <td>31,900.00</td>
                </tr>
                <tr>
                  <td>Tataranietos</td>
                  <td>135</td>
                  <td>10,000.00</td>
                  <td>1,350,000.00</td>
                  <td>5%</td>
                  <td>67,500.00</td>
                </tr>
                <tr>
                  <td>Trastataranietos</td>
                  <td>405</td>
                  <td>10,000.00</td>
                  <td>4,050,000.00</td>
                  <td>3%</td>
                  <td>121,500.00</td>
                </tr>
                <tr>
                  <td>Choznos</td>
                  <td>1215</td>
                  <td>10,000.00</td>
                  <td>12,150,000.00</td>
                  <td>2%</td>
                  <td>243,000.00</td>
                </tr>
                <tr>
                  <td>Bichoznos</td>
                  <td>3645</td>
                  <td>10,000.00</td>
                  <td>36,450,000.00</td>
                  <td>1%</td>
                  <td>364,500.00</td>
                </tr>
                <tr>
                  <td colspan="5"></td>
                  <td>863,000.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- Table 7+3-->
      <div>
        <button :class="{'rounded-b-lg': !tables.tableRD3}" @click="toggleTable('tableRD3')" class="formula-btn">Formula
          7+3
          <AtomsIcon v-show="!tables.tableRD3" name="arrow-down" :size=20 />
          <AtomsIcon v-show="tables.tableRD3" name="arrow-up" :size=20 />
        </button>
        <div v-if="tables.tableRD3" class="table-container">
          <p>Este plan esta basado en que tu familia sea formada por siete (7) personas y que cada uno de ellos a su vez
            la formen de solo tres (3) personas en el primer año.</p>
          <div class="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Generación</th>
                  <th>Afilia</th>
                  <th>Costo</th>
                  <th>Valor</th>
                  <th>% Comisión</th>
                  <th>Comisión</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hijos</td>
                  <td>7</td>
                  <td>10,000.00</td>
                  <td>70,000.00</td>
                  <td>40%</td>
                  <td>28,000.00</td>
                </tr>
                <tr>
                  <td>Nietos</td>
                  <td>21</td>
                  <td>10,000.00</td>
                  <td>210,000.00</td>
                  <td>10%</td>
                  <td>21,000.00</td>
                </tr>
                <tr>
                  <td>Bisnietos</td>
                  <td>63</td>
                  <td>10,000.00</td>
                  <td>630,000.00</td>
                  <td>7%</td>
                  <td>44,100.00</td>
                </tr>
                <tr>
                  <td>Tataranietos</td>
                  <td>189</td>
                  <td>10,000.00</td>
                  <td>1,890,000.00</td>
                  <td>5%</td>
                  <td>94,500.00</td>
                </tr>
                <tr>
                  <td>Trastataranietos</td>
                  <td>567</td>
                  <td>10,000.00</td>
                  <td>5,670,000.00</td>
                  <td>3%</td>
                  <td>170,010.00</td>
                </tr>
                <tr>
                  <td>Choznos</td>
                  <td>1701</td>
                  <td>10,000.00</td>
                  <td>17,010,000.00</td>
                  <td>2%</td>
                  <td>340,200.00</td>
                </tr>
                <tr>
                  <td>Bichoznos</td>
                  <td>5103</td>
                  <td>10,000.00</td>
                  <td>51,030,000.00</td>
                  <td>1%</td>
                  <td>510,300.00</td>
                </tr>
                <tr>
                  <td colspan="5"></td>
                  <td>1,208,200.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- Table 9+3-->
      <div>
        <button :class="{'rounded-b-lg': !tables.tableRD4}" @click="toggleTable('tableRD4')" class="formula-btn">Formula
          9+3
          <AtomsIcon v-show="!tables.tableRD4" name="arrow-down" :size=20 />
          <AtomsIcon v-show="tables.tableRD4" name="arrow-up" :size=20 />
        </button>
        <div v-if="tables.tableRD4" class="table-container">
          <p>Este plan esta basado en que tu familia sea formada por nueve (9) personas y que cada uno de ellos a su vez
            la formen de solo tres (3) personas en el primer año.</p>
          <div class="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Generación</th>
                  <th>Afilia</th>
                  <th>Costo</th>
                  <th>Valor</th>
                  <th>% Comisión</th>
                  <th>Comisión</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hijos</td>
                  <td>9</td>
                  <td>10,000.00</td>
                  <td>90,000.00</td>
                  <td>40%</td>
                  <td>36,000.00</td>
                </tr>
                <tr>
                  <td>Nietos</td>
                  <td>27</td>
                  <td>10,000.00</td>
                  <td>270,000.00</td>
                  <td>10%</td>
                  <td>27,000.00</td>
                </tr>
                <tr>
                  <td>Bisnietos</td>
                  <td>81</td>
                  <td>10,000.00</td>
                  <td>810,000.00</td>
                  <td>7%</td>
                  <td>56,100.00</td>
                </tr>
                <tr>
                  <td>Tataranietos</td>
                  <td>243</td>
                  <td>10,000.00</td>
                  <td>2,430,000.00</td>
                  <td>5%</td>
                  <td>121,500.00</td>
                </tr>
                <tr>
                  <td>Trastataranietos</td>
                  <td>729</td>
                  <td>10,000.00</td>
                  <td>7,290,000.00</td>
                  <td>3%</td>
                  <td>218,700.00</td>
                </tr>
                <tr>
                  <td>Choznos</td>
                  <td>2187</td>
                  <td>10,000.00</td>
                  <td>21,870,000.00</td>
                  <td>2%</td>
                  <td>437,400.00</td>
                </tr>
                <tr>
                  <td>Bichoznos</td>
                  <td>6561</td>
                  <td>10,000.00</td>
                  <td>65,610,000.00</td>
                  <td>1%</td>
                  <td>656,100.00</td>
                </tr>
                <tr>
                  <td colspan="5"></td>
                  <td>1,553,400.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- US TABLES-->
    <div v-show="ShowUS" class="flex flex-col gap-7">
      <p>fef</p>
      <!-- Table 3+3-->
      <div>
        <button :class="{'rounded-b-lg': !tables.tableUS1}" @click="toggleTable('tableUS1')" class="formula-btn">Formula
          3+3
          <AtomsIcon v-show="!tables.tableUS1" name="arrow-down" :size=20 />
          <AtomsIcon v-show="tables.tableUS1" name="arrow-up" :size=20 />
        </button>
        <div v-if="tables.tableUS1" class="table-container">
          <p>Este plan esta basado en que tu familia sea formada por tres (3) personas y que cada uno de ellos a su vez
            la formen de solo tres (3) personas en el primer año.</p>
          <div class="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Generación</th>
                  <th>Afilia</th>
                  <th>Costo</th>
                  <th>Valor</th>
                  <th>% Comisión</th>
                  <th>Comisión</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hijos</td>
                  <td>3</td>
                  <td>USD 500.000</td>
                  <td>1,500.00</td>
                  <td>40%</td>
                  <td>600.00</td>
                </tr>
                <tr>
                  <td>Nietos</td>
                  <td>9</td>
                  <td>USD 500.000</td>
                  <td>4,500.00</td>
                  <td>10%</td>
                  <td>450.00</td>
                </tr>
                <tr>
                  <td>Bisnietos</td>
                  <td>27</td>
                  <td>USD 500.000</td>
                  <td>13,500.00</td>
                  <td>7%</td>
                  <td>945.00</td>
                </tr>
                <tr>
                  <td>Tataranietos</td>
                  <td>81</td>
                  <td>USD 500.000</td>
                  <td>40,000.00</td>
                  <td>5%</td>
                  <td>2,025.00</td>
                </tr>
                <tr>
                  <td>Trastataranietos</td>
                  <td>243</td>
                  <td>USD 500.000</td>
                  <td>121,500.00</td>
                  <td>3%</td>
                  <td>3,645.00</td>
                </tr>
                <tr>
                  <td>Choznos</td>
                  <td>729</td>
                  <td>USD 500.000</td>
                  <td>121,500.00</td>
                  <td>2%</td>
                  <td>7,290.00</td>
                </tr>
                <tr>
                  <td>Bichoznos</td>
                  <td>2187</td>
                  <td>USD 500.000</td>
                  <td>1,093,500.00</td>
                  <td>1%</td>
                  <td>10,935.00</td>
                </tr>
                <tr>
                  <td colspan="5"></td>
                  <td>USD 25,890</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- Table 5+3-->
      <div>
        <button :class="{'rounded-b-lg': !tables.tableUS2}" @click="toggleTable('tableUS2')" class="formula-btn">Formula
          5+3
          <AtomsIcon v-show="!tables.tableUS2" name="arrow-down" :size=20 />
          <AtomsIcon v-show="tables.tableUS2" name="arrow-up" :size=20 />
        </button>
        <div v-if="tables.tableUS2" class="table-container">
          <p>Este plan esta basado en que tu familia sea formada por cinco (5) personas y que cada uno de ellos a su vez
            la formen de solo tres (3) personas en el primer año.</p>
          <div class="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Generación</th>
                  <th>Afilia</th>
                  <th>Costo</th>
                  <th>Valor</th>
                  <th>% Comisión</th>
                  <th>Comisión</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hijos</td>
                  <td>5</td>
                  <td>USD 500.000</td>
                  <td>2,500.00</td>
                  <td>40%</td>
                  <td>1,000.00</td>
                </tr>
                <tr>
                  <td>Nietos</td>
                  <td>15</td>
                  <td>USD 500.000</td>
                  <td>7,500.00</td>
                  <td>10%</td>
                  <td>750.00</td>
                </tr>
                <tr>
                  <td>Bisnietos</td>
                  <td>45</td>
                  <td>USD 500.000</td>
                  <td>22,500.00</td>
                  <td>7%</td>
                  <td>1,575.00</td>
                </tr>
                <tr>
                  <td>Tataranietos</td>
                  <td>135</td>
                  <td>USD 500.000</td>
                  <td>67,500.000</td>
                  <td>5%</td>
                  <td>3,375.00</td>
                </tr>
                <tr>
                  <td>Trastataranietos</td>
                  <td>405</td>
                  <td>USD 500.000</td>
                  <td>202,500.00</td>
                  <td>3%</td>
                  <td>6,075.00</td>
                </tr>
                <tr>
                  <td>Choznos</td>
                  <td>1215</td>
                  <td>USD 500.000</td>
                  <td>607,000.00</td>
                  <td>2%</td>
                  <td>12,150.00</td>
                </tr>
                <tr>
                  <td>Bichoznos</td>
                  <td>3645</td>
                  <td>USD 500.000</td>
                  <td>1,822,500.00</td>
                  <td>1%</td>
                  <td>18,225.00</td>
                </tr>
                <tr>
                  <td colspan="5"></td>
                  <td>USD 43,150.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- Table 7+3-->
      <div>
        <button :class="{'rounded-b-lg': !tables.tableUS3}" @click="toggleTable('tableUS3')" class="formula-btn">Formula
          7+3
          <AtomsIcon v-show="!tables.tableUS3" name="arrow-down" :size=20 />
          <AtomsIcon v-show="tables.tableUS3" name="arrow-up" :size=20 />
        </button>
        <div v-if="tables.tableUS3" class="table-container">
          <p>Este plan esta basado en que tu familia sea formada por siete (7) personas y que cada uno de ellos a su vez
            la formen de solo tres (3) personas en el primer año.</p>
          <div class="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Generación</th>
                  <th>Afilia</th>
                  <th>Costo</th>
                  <th>Valor</th>
                  <th>% Comisión</th>
                  <th>Comisión</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hijos</td>
                  <td>7</td>
                  <td>USD 500.000</td>
                  <td>3,500.00</td>
                  <td>40%</td>
                  <td>1,400.00</td>
                </tr>
                <tr>
                  <td>Nietos</td>
                  <td>21</td>
                  <td>USD 500.000</td>
                  <td>10,500.00</td>
                  <td>10%</td>
                  <td>1,050.00</td>
                </tr>
                <tr>
                  <td>Bisnietos</td>
                  <td>63</td>
                  <td>USD 500.000</td>
                  <td>31,500.00</td>
                  <td>7%</td>
                  <td>2,205.00</td>
                </tr>
                <tr>
                  <td>Tataranietos</td>
                  <td>189</td>
                  <td>USD 500.000</td>
                  <td>94,500.000</td>
                  <td>5%</td>
                  <td>4,725.00</td>
                </tr>
                <tr>
                  <td>Trastataranietos</td>
                  <td>567</td>
                  <td>USD 500.000</td>
                  <td>283,500.00</td>
                  <td>3%</td>
                  <td>8,505.00</td>
                </tr>
                <tr>
                  <td>Choznos</td>
                  <td>1701</td>
                  <td>USD 500.000</td>
                  <td>850,500.00</td>
                  <td>2%</td>
                  <td>17,010.00</td>
                </tr>
                <tr>
                  <td>Bichoznos</td>
                  <td>5103</td>
                  <td>USD 500.000</td>
                  <td>2,551,500.00</td>
                  <td>1%</td>
                  <td>25,515.00</td>
                </tr>
                <tr>
                  <td colspan="5"></td>
                  <td>USD 60,410.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- Table 9+3-->
      <div>
        <button :class="{'rounded-b-lg': !tables.tableUS4}" @click="toggleTable('tableUS4')" class="formula-btn">Formula
          9+3
          <AtomsIcon v-show="!tables.tableUS4" name="arrow-down" :size=20 />
          <AtomsIcon v-show="tables.tableUS4" name="arrow-up" :size=20 />
        </button>
        <div v-if="tables.tableUS4" class="table-container">
          <p>Este plan esta basado en que tu familia sea formada por nueve (9) personas y que cada uno de ellos a su vez
            la formen de solo tres (3) personas en el primer año.</p>
          <div class="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Generación</th>
                  <th>Afilia</th>
                  <th>Costo</th>
                  <th>Valor</th>
                  <th>% Comisión</th>
                  <th>Comisión</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hijos</td>
                  <td>9</td>
                  <td>USD 500.000</td>
                  <td>4,500.00</td>
                  <td>40%</td>
                  <td>1,800.00</td>
                </tr>
                <tr>
                  <td>Nietos</td>
                  <td>27</td>
                  <td>USD 500.000</td>
                  <td>13,500.00</td>
                  <td>10%</td>
                  <td>1,350.00</td>
                </tr>
                <tr>
                  <td>Bisnietos</td>
                  <td>81</td>
                  <td>USD 500.000</td>
                  <td>40,500.00</td>
                  <td>7%</td>
                  <td>2,835.00</td>
                </tr>
                <tr>
                  <td>Tataranietos</td>
                  <td>243</td>
                  <td>USD 500.000</td>
                  <td>121,500.000</td>
                  <td>5%</td>
                  <td>6,075.00</td>
                </tr>
                <tr>
                  <td>Trastataranietos</td>
                  <td>729</td>
                  <td>USD 500.000</td>
                  <td>364,500.00</td>
                  <td>3%</td>
                  <td>10,935.00</td>
                </tr>
                <tr>
                  <td>Choznos</td>
                  <td>2187</td>
                  <td>USD 500.000</td>
                  <td>1,093,500.00</td>
                  <td>2%</td>
                  <td>21,870.00</td>
                </tr>
                <tr>
                  <td>Bichoznos</td>
                  <td>6561</td>
                  <td>USD 500.000</td>
                  <td>3,280,500.00</td>
                  <td>1%</td>
                  <td>32,805.00</td>
                </tr>
                <tr>
                  <td colspan="5"></td>
                  <td>USD 77,670.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        ShowRD: true,
        ShowUS: false,
        tables: {
          tableRD1: false,
          tableRD2: false,
          tableRD3: false,
          tableRD4: false,
          tableUS1: false,
          tableUS2: false,
          tableUS3: false,
          tableUS4: false,
        }
      }
    },
    methods: {
      toggleTable(table) {
        this.tables[table] = !this.tables[table];
      },
      showRDTables() {
        this.ShowRD = true;
        this.ShowUS = false;
      },
      showUSTables() {
        this.ShowRD = false;
        this.ShowUS = true;
      }
    },
  }
</script>

<style lang="postcss" scoped>
  .formula-btn {
    @apply flex bg-primary w-full h-[50px] justify-between px-5 py-3 text-white text-xl font-bold rounded-t-lg items-center;
  }

  table {
    @apply table-auto h-[42px] text-sm leading-[22px] w-full text-center;

    & tr {
      @apply h-10;
    }

    & td {
      @apply px-4;
    }

    & tbody {
      @apply text-[#293451];
    }

    & thead {
      @apply bg-[#DFDFDF] text-primary;
    }

    & tbody tr {
      @apply border-[#293451] border-t;
    }

    & tbody tr:first-child {
      @apply border-t-primary;
    }

    & tbody tr:last-child {
      @apply rounded-b-lg bg-[#DBD9E7] text-[#293451] font-bold
    }
  }

  p {
    @apply text-justify text-sm p-5 border-b border-b-primary bg-[#FFF0F0] text-primary;
  }

  AtomsIcon {
    @apply text-white;
  }

  .table-container {
    @apply border border-primary rounded-b-lg overflow-hidden;
  }

  .active {
    @apply border-b-2 border-b-primary pb-2 text-primary;
  }
</style>